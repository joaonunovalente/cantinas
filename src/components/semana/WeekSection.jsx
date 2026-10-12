import { useMemo } from "react";
import formatMenu from "../common/formatMenu";
import { findCanteenInPayload, getCanteenById } from "../../lib/api";
import { useMenus } from "../../hooks/useMenus";
import {
  addDaysISO,
  formatLongPt,
  startOfDay,
  toISODate,
} from "../../lib/date";

function MealBlock({ meal, error, onRetry }) {
  if (error) {
    return (
      <div role="alert">
        <p className="mb-2">Não foi possível carregar a ementa.</p>
        {onRetry && (
          <button type="button" className="btn btn-sm btn-outline-success" onClick={onRetry}>
            Tentar novamente
          </button>
        )}
      </div>
    );
  }
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

function SkeletonDay() {
  return (
    <div className="day-block mb-5" aria-hidden="true">
      <div className="section-header text-center mb-4">
        <div className="skeleton skeleton-title mx-auto" />
      </div>
      <div className="row">
        {[0, 1].map((i) => (
          <div key={i} className="col-12 col-md-6 py-4">
            <div className="item-inner shadow rounded-4 p-4 h-100">
              <div className="skeleton skeleton-line w-25 mb-4" />
              <div className="skeleton skeleton-line" />
              <div className="skeleton skeleton-line w-75" />
              <div className="skeleton skeleton-line w-50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeekSection({ activeTab }) {
  const selectedCanteen = getCanteenById(activeTab);

  const dates = useMemo(() => {
    const base = startOfDay(new Date());
    return Array.from({ length: 7 }, (_, i) => addDaysISO(base, i));
  }, []);

  const from = dates.length ? toISODate(dates[0]) : null;
  const to = dates.length ? toISODate(dates[dates.length - 1]) : null;
  const { data: payload, loading, error, retry } = useMenus({ from, to });
  const canteen = findCanteenInPayload(payload, activeTab);

  const daysByDate = useMemo(
    () => new Map((canteen?.days ?? []).map((d) => [d.date, d])),
    [canteen]
  );

  if (!selectedCanteen) return null;

  return (
    <main className="container">
      <section className="theme-section section-header help-category-section">
        <div className="container">
          {loading && (
            <>
              <span className="visually-hidden" role="status">A carregar ementas…</span>
              <SkeletonDay />
            </>
          )}

          {!loading &&
            dates.map((date) => {
              const iso = toISODate(date);
              const { title, subtitle } = formatLongPt(date);
              const day = daysByDate.get(iso) ?? null;
              const meals = day?.meals ?? [];
              const lunch = meals.find((m) => m.service === "lunch") ?? null;
              const dinner = meals.find((m) => m.service === "dinner") ?? null;

              return (
                <article
                  className="day-block mb-5"
                  key={iso}
                  aria-labelledby={`day-${iso}`}
                >
                  <div className="section-header text-center mb-4">
                    <h2 className="section-title mb-2" id={`day-${iso}`}>
                      {title}
                    </h2>
                    <p className="text-muted small mb-0">
                      <time dateTime={iso}>{subtitle}</time>
                    </p>
                  </div>

                  {error && !day ? (
                    <div className="alert alert-warning text-center" role="alert">
                      Não foi possível carregar este dia.{" "}
                      <button type="button" className="btn btn-sm btn-outline-success ms-2" onClick={retry}>
                        Tentar novamente
                      </button>
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-12 col-md-6 py-4">
                        <div className="item-inner shadow rounded-4 p-4 h-100">
                          <h3 className="item-heading mb-4">Almoço</h3>
                          <MealBlock meal={lunch} error={error && !day ? error : null} onRetry={retry} />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 py-4">
                        <div className="item-inner shadow rounded-4 p-4 h-100">
                          <h3 className="item-heading mb-4">Jantar</h3>
                          <MealBlock meal={dinner} error={error && !day ? error : null} onRetry={retry} />
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default WeekSection;
