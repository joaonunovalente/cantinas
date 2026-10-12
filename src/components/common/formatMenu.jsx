const CATEGORY_ORDER = ["soup", "meat", "fish", "diet", "vegetarian", "other"];

const CATEGORY_FALLBACK_LABELS = {
  soup: "Sopa",
  meat: "Carne",
  fish: "Peixe",
  diet: "Dieta",
  vegetarian: "Vegetariana",
  other: "Prato",
};

function getLabel(item) {
  if (item.sourceLabel) return item.sourceLabel;
  return CATEGORY_FALLBACK_LABELS[item.category] ?? "Prato";
}

// items: [{ category, sourceLabel, text }]
function formatMenu(items) {
  if (!items || items.length === 0) return null;

  const sorted = [...items].sort(
    (a, b) =>
      CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
  );

  // "other" sem sourceLabel (ex: TrêsDê) -> lista simples sem rótulo repetido
  const othersWithoutLabel = sorted.filter(
    (i) => i.category === "other" && !i.sourceLabel
  );
  const labelled = sorted.filter(
    (i) => !(i.category === "other" && !i.sourceLabel)
  );

  return (
    <>
      {labelled.map((item, i) => (
        <p key={i} className="mb-2">
          <strong>{getLabel(item)}</strong>: {item.text}
        </p>
      ))}

      {othersWithoutLabel.length > 0 && (
        <ul className="mb-0 ps-3">
          {othersWithoutLabel.map((item, i) => (
            <li key={`other-${i}`}>{item.text}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default formatMenu;
