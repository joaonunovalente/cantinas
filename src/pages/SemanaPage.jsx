import { useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/semana/Hero";
import WeekSection from "../components/semana/WeekSection";
import { CANTEENS } from "../lib/api";

function SemanaPage() {
  const [activeTab, setActiveTab] = useState("santiago");
  const tabs = CANTEENS.map(({ id, label }) => ({ id, label }));

  return (
    <PageLayout
      hero={
        <Hero tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      }
    >
      <WeekSection activeTab={activeTab} />
    </PageLayout>
  );
}

export default SemanaPage;
