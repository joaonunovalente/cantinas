function formatMenu(items) {
  const groupedByNome = {};

  items.forEach((item) => {
    groupedByNome[item.Nome] = item.Componentes;
  });

  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const soups = [];

  Object.values(groupedByNome).forEach((componentes) => {
    componentes.forEach((c) => {
      if (c.TipoString === "Sopa") {
        const name = capitalize(c.Nome);
        if (!soups.includes(name)) soups.push(name);
      }
    });
  });

  return (
    <>
      {soups.length > 0 && (
        <p>
          <strong>Sopa</strong>: {soups.join("; ")}
        </p>
      )}

      {Object.entries(groupedByNome).map(([nome, componentes], i) => {
        const pratos = componentes.filter((c) => c.TipoString === "Prato");

        if (!pratos.length) return null;

        let typeLabel = "Prato";
        const upper = nome.toUpperCase();

        if (upper.includes("CARNE")) typeLabel = "Carne";
        else if (upper.includes("PEIXE")) typeLabel = "Peixe";
        else if (upper.includes("DIETA")) typeLabel = "Dieta";
        else if (upper.includes("VEGETARIANO")) typeLabel = "Vegetariano";

        return (
          <p key={i}>
            <strong>{typeLabel}</strong>:{" "}
            {pratos.map((p) => capitalize(p.Nome)).join("; ")}
          </p>
        );
      })}
    </>
  );
}

export default formatMenu