import { useMemo } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/semana/Hero";
import WeekSection from "../components/semana/WeekSection";
import { CANTEENS } from "../lib/api";
import { useCanteenTab } from "../hooks/useCanteenTab";

function SemanaPage() {
  const [activeTab, setActiveTab] = useCanteenTab();
  const tabs = useMemo(() => CANTEENS.map(({ id, label }) => ({ id, label })), []);

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
