import MealCard from "../common/MealCard"

function MealsSection({ activeTab, ementas }) {
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
    <main className="container">
      <section className="theme-section">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <MealCard title="Almoço" items={groupByPeriod("Almoço")} />
            <MealCard title="Jantar" items={groupByPeriod("Jantar")} />
          </div>
        </div>
      </section>
    </main>
  );
}
export default MealsSection;
