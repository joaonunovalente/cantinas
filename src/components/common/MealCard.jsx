import formatMenu from "./formatMenu";

function MealCard({ title, meal, items, loading, error, onRetry }) {
  const renderBody = () => {
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
    // Compat: WeekSection/Home podem passar `items` (array) ou `meal` (objeto)
    if (meal) {
      if (meal.status === "closed") {
        return <p className="mb-0 text-muted">Encontra-se encerrado.</p>;
      }
      if (meal.status === "empty" || !meal.items || meal.items.length === 0) {
        return <p className="mb-0">Não existem ementas disponíveis.</p>;
      }
      return formatMenu(meal.items);
    }

    if (!items || items.length === 0) {
      return <p className="mb-0">Não existem ementas disponíveis.</p>;
    }
    return formatMenu(items);
  };

  return (
    <div className="col-12 col-md-6 d-flex">
      <div className="item-inner shadow rounded-4 p-4 w-100 d-flex flex-column my-3">
        <h3 className="item-heading mb-4">{title}</h3>

        <div className="item-desc flex-grow-1">
          {loading ? (
            <div aria-hidden="true">
              <div className="skeleton skeleton-line" />
              <div className="skeleton skeleton-line w-75" />
              <div className="skeleton skeleton-line w-50" />
              <span className="visually-hidden" role="status">A carregar ementas…</span>
            </div>
          ) : (
            renderBody()
          )}
        </div>
      </div>
    </div>
  );
}

export default MealCard;
