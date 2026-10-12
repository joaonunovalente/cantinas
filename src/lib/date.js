const DAY_MS = 24 * 60 * 60 * 1000;

const WEEKDAYS_LONG = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const WEEKDAYS_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const MONTHS_SHORT = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

export function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isSameDay(a, b) {
  return toISODate(a) === toISODate(b);
}

// "Segunda-feira · 12 out"
export function formatLongPt(date) {
  return {
    title: WEEKDAYS_LONG[date.getDay()],
    subtitle: `${date.getDate()} ${MONTHS_SHORT[date.getMonth()]}`,
  };
}

export function formatShortPt(date) {
  return `${WEEKDAYS_SHORT[date.getDay()]} ${date.getDate()} ${MONTHS_SHORT[date.getMonth()]}`;
}

export function addDaysISO(base, offset) {
  return new Date(startOfDay(base).getTime() + offset * DAY_MS);
}
