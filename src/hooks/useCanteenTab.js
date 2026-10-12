import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { CANTEENS } from "../lib/api";

const PARAM = "cantina";
const STORAGE_KEY = "cantinas.defaultCanteen";
const DEFAULT = "santiago";

function isValidCanteen(id) {
  return CANTEENS.some((c) => c.id === id);
}

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v && isValidCanteen(v)) return v;
  } catch {
    // localStorage indisponível
  }
  return DEFAULT;
}

/**
 * Tab de cantina sincronizada com ?cantina= para permitir partilha por link.
 * - Lê do URL, com fallback para localStorage e default.
 * - Ao mudar, atualiza URL (replace) e guarda preferência.
 */
export function useCanteenTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fromUrl = searchParams.get(PARAM);
  const activeTab = isValidCanteen(fromUrl) ? fromUrl : readStored();

  const setActiveTab = useCallback(
    (id) => {
      if (!isValidCanteen(id)) return;
      try {
        localStorage.setItem(STORAGE_KEY, id);
      } catch {
        // ignora
      }
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          next.set(PARAM, id);
          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  return [activeTab, setActiveTab];
}
