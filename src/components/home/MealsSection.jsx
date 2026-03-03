import MealCard from "../common/MealCard";
import SectionHeaderTitle from "../common/SectionHeaderTitle";

function MealsSection({ activeTab, ementas, loading }) {
  const canteenMap = {
    santiago: { tag: "Santiago", nome: "Cantina de Santiago" },
    crasto: { tag: "Crasto", nome: "Cantina do Crasto" },
    grelhados: { tag: "Grelhados", nome: "Campi Grelhados" },
    estga: { tag: "ESTGA", nome: "Cantina da ESTGA" },
    universitario: { tag: "Restaurante Universitário", nome: "Restaurante Universitário" },
  };

  const selectedCanteen = canteenMap[activeTab];
  if (!selectedCanteen) return null;

  const canteenMeals = ementas.filter((entry) =>
    entry.Refeitorios.includes(selectedCanteen.tag)
  );

  const groupByPeriod = (period) =>
    canteenMeals.filter((m) => m.Periodo === period);

  return (
    <main className="container">
      <section className="theme-section">
        <SectionHeaderTitle title={selectedCanteen.nome} />
        <div className="container">
          <div className="row g-4 align-items-stretch my-3">
            <MealCard
              title="Almoço"
              items={groupByPeriod("Almoço")}
              loading={loading}
            />
            <MealCard
              title="Jantar"
              items={groupByPeriod("Jantar")}
              loading={loading}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default MealsSection;