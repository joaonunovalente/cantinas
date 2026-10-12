import { useState } from "react";

const STORAGE_KEY = "cantinas.dismissedAlerts";

function readDismissed() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const ALERTS = [
  {
    id: "arquivado",
    title: "Projeto arquivado",
    accent: "#e8c547",
    linkColor: "#1b4d3e",
    content: (
      <>
        A versão funcional está em{" "}
        <a className="fw-bold" href="https://demo.cantinas.pt" style={{ color: "#1b4d3e" }}>
          demo.cantinas.pt
        </a>
        . Lê a{" "}
        <a className="text-decoration-underline" href="/carta-de-despedida" style={{ color: "#1b4d3e" }}>
          Carta de Despedida
        </a>
        .
      </>
    ),
  },
  {
    id: "alternativo",
    title: "Projeto alternativo",
    accent: "#2d6a4f",
    linkColor: "#2d6a4f",
    content: (
      <>
        Existe um projeto alternativo em{" "}
        <a className="fw-bold" href="https://ementas.cantinas.pt" style={{ color: "#2d6a4f" }}>
          ementas.cantinas.pt
        </a>
        .
      </>
    ),
  },
  {
    id: "bluesky",
    title: "BlueSky",
    accent: "#054d2c",
    linkColor: "#2d6a4f",
    content: (
      <>
        Ementas também na rede{" "}
        <a className="fw-bold" href="https://bsky.app/profile/cantinas.pt" style={{ color: "#2d6a4f" }}>
          BlueSky
        </a>
        .
      </>
    ),
  },
];

function Alerts() {
  const [dismissed, setDismissed] = useState(readDismissed);

  const dismiss = (id) => {
    setDismissed((prev) => {
      const next = [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // apenas esconde nesta sessão
      }
      return next;
    });
  };

  const visible = ALERTS.filter((a) => !dismissed.includes(a.id));
  if (visible.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Avisos"
      className="d-flex flex-column gap-2"
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 1080,
        width: "min(360px, calc(100vw - 2rem))",
      }}
    >
      {visible.map((alert) => (
        <div
          key={alert.id}
          role="status"
          aria-live="polite"
          className="shadow-lg rounded-3 overflow-hidden"
          style={{
            background: "#fff",
            color: "#1a1a1a",
            border: "1px solid rgba(0,0,0,0.12)",
            borderTop: `4px solid ${alert.accent}`,
          }}
        >
          <div className="d-flex align-items-center gap-2 px-3 pt-2">
            <i
              className="bi bi-info-circle-fill d-inline-flex"
              aria-hidden="true"
              style={{ color: alert.accent, fontSize: "1rem", lineHeight: 1 }}
            />
            <strong className="flex-grow-1 small lh-base mb-0">{alert.title}</strong>
            <button
              type="button"
              className="btn btn-sm p-0 px-1 lh-1 flex-shrink-0 d-inline-flex align-items-center justify-content-center"
              style={{ color: "#1a1a1a", fontSize: "1rem", lineHeight: 1 }}
              aria-label={`Dispensar aviso: ${alert.title}`}
              onClick={() => dismiss(alert.id)}
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </div>
          <div className="px-3 pb-3 pt-1 small">{alert.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Alerts;
