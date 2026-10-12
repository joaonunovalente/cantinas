import MealCard from "../common/MealCard";
import SectionHeaderTitle from "../common/SectionHeaderTitle";
import { getCanteenById } from "../../lib/api";

function MealsSection({ activeTab, canteen, loading }) {
  const selectedCanteen = getCanteenById(activeTab);
  if (!selectedCanteen) return null;

  const today = canteen?.days?.[0] ?? null;
  const meals = today?.meals ?? [];

  const lunch =
    meals.find((m) => m.service === "lunch") ??
    meals.find((m) => m.service === "unknown") ??
    null;
  const dinner = meals.find((m) => m.service === "dinner") ?? null;

  return (
    <main className="container">
      <section className="theme-section mt-5">
        <SectionHeaderTitle title={selectedCanteen.nome} />
        <div className="container">
          <div className="row g-4 align-items-stretch mb-5 my-3">
            <MealCard title="Almoço" meal={lunch} loading={loading} />
            <MealCard title="Jantar" meal={dinner} loading={loading} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default MealsSection;
