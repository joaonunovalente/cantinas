import { useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/home/Hero";
import MainContent from "../components/home/MainContent";
import CtaSection from "../components/home/CtaSection";

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
      <MainContent activeTab={activeTab} ementas={ementas} />
      <CtaSection />
    </PageLayout>
  );
}

export default HomePage;
