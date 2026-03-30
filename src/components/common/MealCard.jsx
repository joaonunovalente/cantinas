import { useEffect, useState } from "react";
import formatMenu from "./formatMenu";

const LOADING_FRAMES = [".", "..", "..."];

function MealCard({ title, items, loading }) {
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

  return (
    <div className="col-12 col-md-6 d-flex">
      <div className="item-inner shadow rounded-4 p-4 w-100 d-flex flex-column my-3">
        <h3 className="item-heading mb-4">{title}</h3>

        <div className="item-desc flex-grow-1">
          {loading ? (
            <p className="mb-0">A carregar as ementas{LOADING_FRAMES[frameIndex]}</p>
          ) : items.length === 0 ? (
            <p className="mb-0">Não existem ementas disponíveis.</p>
          ) : (
            formatMenu(items)
          )}
        </div>
      </div>
    </div>
  );
}

export default MealCard;