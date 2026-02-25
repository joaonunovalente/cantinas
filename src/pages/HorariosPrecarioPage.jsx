import { useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/horarios-precario/Hero";
import MainContent from "../components/horarios-precario/MainContent";

import horarios from "../data/horarios";
import precario from "../data/precario";

function HorariosPrecarioPage() {
  const [activeTab, setActiveTab] = useState("horarios");

  const tabs = [
    { id: "horarios", label: "Horários" },
    { id: "precario", label: "Preçário" },
  ];

  return (
    <PageLayout
      hero={
        <Hero
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      }
    >
    <MainContent horarios={horarios} precario={precario} activeTab={activeTab} />
      
    </PageLayout>
  );
}

export default HorariosPrecarioPage;
