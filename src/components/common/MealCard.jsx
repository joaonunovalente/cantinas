import { useEffect, useState } from "react";
import formatMenu from "./formatMenu";

const LOADING_FRAMES = [".", "..", "..."];

function MealCard({ title, meal, items, loading }) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (!loading) {
      setFrameIndex(0);
      return undefined;
    }

    const intervalId = setInterval(() => {
      setFrameIndex((currentIndex) =>
        (currentIndex + 1) % LOADING_FRAMES.length
      );
    }, 450);

    return () => clearInterval(intervalId);
  }, [loading]);

  const renderBody = () => {
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
            <p className="mb-0">A carregar as ementas{LOADING_FRAMES[frameIndex]}</p>
          ) : (
            renderBody()
          )}
        </div>
      </div>
    </div>
  );
}

export default MealCard;
