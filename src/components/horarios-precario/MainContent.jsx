import Precario from "./Precario";
import Horarios from "./Horarios";

function MainContent({ categories, activeTab}) {
  return (
    <main className="container">
      {activeTab === "horarios" && (
        <div>
          <Horarios categoriesList={categories} />
        </div>
      )}
      {activeTab === "precario" && (
        <div>
          <Precario categoriesList={categories} />
        </div>
      )}
    </main>
  );
}

export default MainContent;
