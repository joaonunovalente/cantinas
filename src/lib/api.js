export const API_BASE_URL = "https://ementas.franciscoribeiro.pt/api/v1";

export const CANTEENS = [
  { id: "santiago", label: "Santiago", nome: "Cantina de Santiago" },
  { id: "crasto", label: "Crasto", nome: "Cantina do Crasto" },
  { id: "grelhados", label: "Grelhados", nome: "Campi Grelhados" },
  { id: "estga", label: "ESTGA", nome: "Cantina da ESTGA" },
  {
    id: "restaurante-universitario",
    label: "Restaurante Universitário",
    nome: "Restaurante Universitário",
  },
];

export function formatDateISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDays(date, offset) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offset);
  return d;
}

export async function fetchMenus({ from, to, canteens } = {}) {
  const params = new URLSearchParams();
  if (from) params.set("from", from);
  if (to) params.set("to", to);
  if (canteens) params.set("canteens", canteens);

  const query = params.toString();
  const url = `${API_BASE_URL}/menus${query ? `?${query}` : ""}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erro ao carregar ementas (${res.status})`);
  return res.json();
}

export async function fetchCanteens() {
  const res = await fetch(`${API_BASE_URL}/canteens`);
  if (!res.ok) throw new Error(`Erro ao carregar cantinas (${res.status})`);
  return res.json();
}

export function getCanteenById(id) {
  return CANTEENS.find((c) => c.id === id);
}

export function findCanteenInPayload(payload, canteenId) {
  if (!payload || !Array.isArray(payload.canteens)) return null;
  return payload.canteens.find((c) => c.id === canteenId) ?? null;
}
