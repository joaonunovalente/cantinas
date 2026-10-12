import { useState } from "react";

const STORAGE_KEY = "cantinas.dismissedAlerts";

const ALERTS = [
  {
    id: "arquivado",
    background: "#e8c547",
    color: "#1a1a1a",
    linkColor: "#1b4d3e",
    content: (
      <>
        Este projeto foi arquivado. A versão funcional está disponível em{" "}
        <a
          className="fw-bold"
          href="https://demo.cantinas.pt"
          style={{ color: "#1b4d3e" }}
        >
          demo.cantinas.pt
        </a>
        . Lê a{" "}
        <a
          className="text-decoration-underline"
          href="/carta-de-despedida"
          style={{ color: "#1b4d3e" }}
        >
          Carta de Despedida
        </a>
        .
      </>
    ),
  },
  {
    id: "alternativo",
    background: "#2d6a4f",
    color: "#fff",
    linkColor: "#95d5b2",
    content: (
      <>
        Existe um projeto alternativo que também disponibiliza as ementas em{" "}
        <a
          className="fw-bold"
          href="https://ementas.cantinas.pt"
          style={{ color: "#95d5b2" }}
        >
          ementas.cantinas.pt
        </a>
        .
      </>
    ),
  },
  {
    id: "bluesky",
    background: "#054d2c",
    color: "#fff",
    linkColor: "#7dcea1",
    content: (
      <>
        As ementas estão também disponíveis na rede social{" "}
        <a
          className="fw-bold"
          href="https://bsky.app/profile/cantinas.pt"
          style={{ color: "#7dcea1" }}
        >
          BlueSky
        </a>
        .
      </>
    ),
  },
];

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

function Alerts() {
  const [dismissed, setDismissed] = useState(readDismissed);

  const dismiss = (id) => {
    setDismissed((prev) => {
      const next = [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // localStorage indisponível: apenas esconde nesta sessão
      }
      return next;
    });
  };

  const visible = ALERTS.filter((alert) => !dismissed.includes(alert.id));
  if (visible.length === 0) return null;

  return (
    <div role="region" aria-label="Avisos">
      {visible.map((alert) => (
        <div
          key={alert.id}
          className="px-3 py-2 small fw-semibold d-flex align-items-center justify-content-center gap-2"
          style={{ background: alert.background, color: alert.color }}
        >
          <span className="flex-grow-1 text-center">{alert.content}</span>
          <button
            type="button"
            className="btn btn-sm p-0 px-1 lh-1 flex-shrink-0"
            style={{ color: alert.color, fontSize: "1rem", lineHeight: 1 }}
            aria-label="Dispensar aviso"
            onClick={() => dismiss(alert.id)}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Alerts;
