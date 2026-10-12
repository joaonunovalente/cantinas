import { useMemo } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/home/Hero";
import MealsSection from "../components/home/MealsSection";
import { CANTEENS, findCanteenInPayload } from "../lib/api";
import { toISODate } from "../lib/date";
import { useCanteenTab } from "../hooks/useCanteenTab";
import { useMenus } from "../hooks/useMenus";

function HomePage() {
  const [activeTab, setActiveTab] = useCanteenTab();
  const tabs = useMemo(() => CANTEENS.map(({ id, label }) => ({ id, label })), []);

  const today = useMemo(() => toISODate(new Date()), []);
  const { data: payload, loading, error, retry } = useMenus({ from: today, to: today });

  const canteen = findCanteenInPayload(payload, activeTab);

  return (
    <PageLayout
      hero={
        <Hero tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      }
    >
      <MealsSection
        activeTab={activeTab}
        canteen={canteen}
        loading={loading}
        error={error}
        onRetry={retry}
      />
    </PageLayout>
  );
}

export default HomePage;
