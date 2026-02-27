import { useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/semana/Hero";
import WeekSection from "../components/semana/WeekSection";

import ementas from "../data/ementas";

function SemanaPage() {
  const [activeTab, setActiveTab] = useState("santiago");
  const tabs = [
    { id: "santiago", label: "Santiago" },
    { id: "crasto", label: "Crasto" },
    { id: "grelhados", label: "Grelhados" },
    { id: "estga", label: "ESTGA" },
    { id: "universitario", label: "Restaurante Universitário" },
  ];

  return (
    <PageLayout
      hero={
        <Hero tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      }
    >
      <WeekSection activeTab={activeTab} ementas={ementas} />
    </PageLayout>
  );
}

export default SemanaPage;
