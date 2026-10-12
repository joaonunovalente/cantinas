import { useEffect, useState } from "react";
import formatMenu from "../common/formatMenu";
import {
  addDays,
  formatDateISO,
  fetchMenus,
  findCanteenInPayload,
  getCanteenById,
} from "../../lib/api";

const WEEKDAY_NAMES = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function MealBlock({ meal }) {
  if (!meal) {
    return <p className="text-muted mb-0">Encontra-se encerrado.</p>;
  }
  if (meal.status === "closed") {
    return <p className="text-muted mb-0">Encontra-se encerrado.</p>;
  }
  if (meal.status === "empty" || !meal.items || meal.items.length === 0) {
    return <p className="mb-0">Não existem ementas disponíveis.</p>;
  }
  return formatMenu(meal.items);
}

function WeekSection({ activeTab }) {
  const [payload, setPayload] = useState(null);
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(".");

  const selectedCanteen = getCanteenById(activeTab);
  const canteen = findCanteenInPayload(payload, activeTab);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    let cancelled = false;

    async function loadWeek() {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const range = Array.from({ length: 7 }, (_, i) => addDays(start, i));
      setDates(range);

      const from = formatDateISO(range[0]);
      const to = formatDateISO(range[6]);

      try {
        const data = await fetchMenus({ from, to });
        if (cancelled) return;
        setPayload(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setPayload(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    setLoading(true);
    loadWeek();

    return () => {
      cancelled = true;
    };
    // Fetch único para a semana; a filtragem por cantina é feita em memória.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedCanteen) return null;

  const daysByDate = new Map(
    (canteen?.days ?? []).map((d) => [d.date, d])
  );

  const renderLoading = () => {
    const todayIndex = new Date().getDay();
    return (
      <div className="day-block mb-5">
        <div className="section-header text-center mb-5">
          <h2 className="section-title mb-3">{WEEKDAY_NAMES[todayIndex]}</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 py-4">
            <div className="item-inner shadow rounded-4 p-4 h-100">
              <h3 className="item-heading mb-4">Almoço</h3>
              <p>A carregar ementas{dots}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 py-4">
            <div className="item-inner shadow rounded-4 p-4 h-100">
              <h3 className="item-heading mb-4">Jantar</h3>
              <p>A carregar ementas{dots}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="container">
      <section className="theme-section section-header help-category-section">
        <div className="container">
          {loading && renderLoading()}

          {!loading &&
            dates.map((date, index) => {
              const iso = formatDateISO(date);
              const day = daysByDate.get(iso) ?? null;
              const meals = day?.meals ?? [];
              const lunch =
                meals.find((m) => m.service === "lunch") ?? null;
              const dinner =
                meals.find((m) => m.service === "dinner") ?? null;

              return (
                <div className="day-block mb-5" key={iso || index}>
                  <div className="section-header text-center mb-5">
                    <h2 className="section-title mb-3">
                      {WEEKDAY_NAMES[date.getDay()]}
                    </h2>
                    <p className="text-muted small mb-0">{iso}</p>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6 py-4">
                      <div className="item-inner shadow rounded-4 p-4 h-100">
                        <h3 className="item-heading mb-4">Almoço</h3>
                        <MealBlock meal={lunch} />
                      </div>
                    </div>

                    <div className="col-12 col-md-6 py-4">
                      <div className="item-inner shadow rounded-4 p-4 h-100">
                        <h3 className="item-heading mb-4">Jantar</h3>
                        <MealBlock meal={dinner} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default WeekSection;
