import { useState, useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/home/Hero";
import MealsSection from "../components/home/MealsSection";
import {
  CANTEENS,
  formatDateISO,
  fetchMenus,
  findCanteenInPayload,
} from "../lib/api";

function HomePage() {
  const [activeTab, setActiveTab] = useState("santiago");
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);

  const tabs = CANTEENS.map(({ id, label }) => ({ id, label }));

  useEffect(() => {
    let cancelled = false;

    const fetchEmentas = async () => {
      const today = formatDateISO(new Date());
      try {
        const data = await fetchMenus({ from: today, to: today });
        if (!cancelled) setPayload(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setPayload(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchEmentas();
    return () => {
      cancelled = true;
    };
  }, []);

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
      />
    </PageLayout>
  );
}

export default HomePage;
