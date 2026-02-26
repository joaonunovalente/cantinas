function MainContent({ activeTab, ementas }) {
  const canteenMap = {
    santiago: "Santiago",
    grelhados: "Grelhados",
    crasto: "Crasto",
    estga: "ESTGA",
    universitario: "Restaurante Universitário",
  };

  const selectedCanteen = canteenMap[activeTab];

  const canteenMeals = ementas.filter((entry) =>
    entry.Refeitorios.includes(selectedCanteen),
  );

  const groupByPeriod = (period) =>
    canteenMeals.filter((m) => m.Periodo === period);

  return (
    <section className="theme-section">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <MealCard title="Almoço" items={groupByPeriod("Almoço")} />
          <MealCard title="Jantar" items={groupByPeriod("Jantar")} />
        </div>
      </div>
    </section>
  );
}

function MealCard({ title, items }) {
  return (
    <div className="col-12 col-md-6 d-flex">
      <div className="item-inner shadow rounded-4 p-4 w-100 d-flex flex-column">
        <h3 className="item-heading mb-4">{title}</h3>

        <div className="item-desc flex-grow-1">
          {items.length === 0 ? (
            <p className="mb-0">Encontra-se encerrado.</p>
          ) : (
            formatMenu(items)
          )}
        </div>
      </div>
    </div>
  );
}

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

export default MainContent;
