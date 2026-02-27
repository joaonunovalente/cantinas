import formatMenu from "./formatMenu";

function MealCard({ title, items, loading }) {
  return (
    <div className="col-12 col-md-6 d-flex">
      <div className="item-inner shadow rounded-4 p-4 w-100 d-flex flex-column my-3">
        <h3 className="item-heading mb-4">{title}</h3>

        <div className="item-desc flex-grow-1">
          {loading ? (
            <p className="mb-0">A carregar as ementas...</p>
          ) : items.length === 0 ? (
            <p className="mb-0">Encontra-se encerrado.</p>
          ) : (
            formatMenu(items)
          )}
        </div>
      </div>
    </div>
  );
}

export default MealCard;