import { useCallback, useEffect, useRef, useState } from "react";
import { fetchMenus } from "../lib/api";

const CACHE_PREFIX = "cantinas.menus.";
const TTL_MS = 60 * 60 * 1000; // 1h

function cacheKey(from, to) {
  return `${CACHE_PREFIX}${from}_${to}`;
}

function readCache(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.data || !parsed.savedAt) return null;
    if (Date.now() - parsed.savedAt > TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ savedAt: Date.now(), data }));
  } catch {
    // quota cheia ou indisponível: ignora
  }
}

/**
 * Fetch de ementas com cache localStorage (TTL 1h) e estado de erro/retry.
 * Sincroniza cache (external store) para state no effect — setState síncrono intencional.
 */
/* eslint-disable react-hooks/set-state-in-effect */
export function useMenus({ from, to, enabled = true } = {}) {
  const [data, setData] = useState(() =>
    from && to ? readCache(cacheKey(from, to)) : null
  );
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const cancelled = useRef(false);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  useEffect(() => {
    cancelled.current = false;
    if (!enabled || !from || !to) {
      setLoading(false);
      return () => {
        cancelled.current = true;
      };
    }

    const key = cacheKey(from, to);
    const cached = readCache(key);
    if (cached) {
      setData(cached);
      setLoading(false);
      setError(null);
      return () => {
        cancelled.current = true;
      };
    }

    let ignore = false;
    setLoading(true);
    setError(null);

    fetchMenus({ from, to })
      .then((res) => {
        if (ignore || cancelled.current) return;
        setData(res);
        writeCache(key, res);
      })
      .catch((err) => {
        if (ignore || cancelled.current) return;
        console.error(err);
        setError(err instanceof Error ? err : new Error("Erro ao carregar ementas"));
      })
      .finally(() => {
        if (ignore || cancelled.current) return;
        setLoading(false);
      });

    return () => {
      ignore = true;
      cancelled.current = true;
    };
  }, [from, to, enabled, attempt]);

  return { data, loading, error, retry };
}
