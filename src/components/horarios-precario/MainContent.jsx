import PrecarioSection from "./PrecarioSection";
import HorariosSection from "./HorariosSection";

function MainContent({ horarios, precario, activeTab}) {
  return (
    <main className="container">
      {activeTab === "horarios" && (
        <div>
          <HorariosSection horarios={horarios} />
        </div>
      )}
      {activeTab === "precario" && (
        <div>
          <PrecarioSection precario={precario} />
        </div>
      )}
    </main>
  );
}

export default MainContent;
