import { useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/home/Hero";
import MealsSection from "../components/home/MealsSection";

import ementas from "../data/ementas";

function HomePage() {
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
      <MealsSection activeTab={activeTab} ementas={ementas} />
    </PageLayout>
  );
}

export default HomePage;
