import { useState, useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import Hero from "../components/home/Hero";
import MealsSection from "../components/home/MealsSection";

function HomePage() {
  const [activeTab, setActiveTab] = useState("santiago");
  const [ementas, setEmentas] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { id: "santiago", label: "Santiago" },
    { id: "crasto", label: "Crasto" },
    { id: "grelhados", label: "Grelhados" },
    { id: "estga", label: "ESTGA" },
    { id: "universitario", label: "Restaurante Universitário" },
  ];

  useEffect(() => {
    const fetchEmentas = async () => {
      const now = new Date();
      const today =
        now.getFullYear() +
        "-" +
        String(now.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(now.getDate()).padStart(2, "0");
      const url = `https://api.cantinas.pt/?date=${today}`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao carregar ementas");
        const data = await res.json();
        setEmentas(data);
      } catch (err) {
        console.error(err);
        setEmentas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEmentas();
  }, []);

  return (
    <PageLayout
      hero={
        <Hero tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      }
    >
      <MealsSection
        activeTab={activeTab}
        ementas={ementas}
        loading={loading}
      />
    </PageLayout>
  );
}

export default HomePage;