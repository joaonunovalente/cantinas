import { useEffect, useState } from "react";

function WeekSection({ activeTab }) {
  const canteenMap = {
    santiago: { tag: "Santiago", nome: "Cantina de Santiago" },
    crasto: { tag: "Crasto", nome: "Cantina do Crasto" },
    grelhados: { tag: "Grelhados", nome: "Campi Grelhados" },
    estga: { tag: "ESTGA", nome: "Cantina da ESTGA" },
    universitario: {
      tag: "Restaurante Universitário",
      nome: "Restaurante Universitário",
    },
  };

  const weekdayNames = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const [weekData, setWeekData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(".");

  const selectedCanteen = canteenMap[activeTab];

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getRollingDate(offset) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + offset);
    return d;
  }

  function normalizeString(str) {
    return str
      ?.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function groupByPeriod(data) {
    return data.reduce((acc, item) => {
      if (!acc[item.Periodo]) acc[item.Periodo] = [];
      acc[item.Periodo].push(item);
      return acc;
    }, {});
  }

  function capitalize(str) {
    return str
      ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      : "";
  }

  function generateMenuHTML(items) {
    if (!items || items.length === 0) {
      return "<p class='text-muted'>Encontra-se encerrado.</p>";
    }

    let html = "";
    const soups = new Set();

    items.forEach((i) =>
      i.Componentes.forEach((c) => {
        if (c.TipoString === "Sopa") soups.add(capitalize(c.Nome));
      })
    );

    if (soups.size) {
      html += `<p><strong>Sopa</strong>: ${[...soups].join("; ")}</p>`;
    }

    items.forEach((item) => {
      const pratos = item.Componentes.filter(
        (c) => c.TipoString === "Prato"
      );
      if (!pratos.length) return;

      let label = "Prato";
      const n = item.Nome.toUpperCase();

      if (n.includes("CARNE")) label = "Carne";
      else if (n.includes("PEIXE")) label = "Peixe";
      else if (n.includes("DIETA")) label = "Dieta";
      else if (n.includes("VEGETARIANO")) label = "Vegetariano";

      if (n.includes("(OPÇÃO)")) label += " (opção)";

      html += `<p><strong>${label}</strong>: ${pratos
        .map((p) => capitalize(p.Nome))
        .join("; ")}</p>`;
    });

    return html || "<p class='text-muted'>Encontra-se encerrado.</p>";
  }

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    async function loadWeek() {
      const requests = Array.from({ length: 7 }, (_, i) => {
        const date = getRollingDate(i);

        return fetch(
          `https://api.cantinas.pt/?date=${formatDate(date)}`
        )
          .then((res) => res.json())
          .then((data) => ({
            date,
            data,
          }))
          .catch(() => ({
            date,
            data: [],
          }));
      });

      const results = await Promise.all(requests);
      setWeekData(results);
      setLoading(false);
    }

    loadWeek();
  }, []);

  if (!selectedCanteen) return null;

  const normalizedSelected = normalizeString(selectedCanteen.tag);
  const todayIndex = new Date().getDay();

  // Se a API não devolveu absolutamente nenhum dia
  const apiReturnedNothing = !weekData.some((d) => d.data && d.data.length > 0);

  return (
    <main className="container">
      <section className="theme-section section-header help-category-section">
        <div className="container">
          {loading && (
            <div className="day-block mb-5">
              <div className="section-header text-center mb-5">
                <h2 className="section-title mb-3">
                  {weekdayNames[todayIndex]}
                </h2>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 py-4">
                  <div className="item-inner shadow rounded-4 p-4 h-100">
                    <h3 className="item-heading mb-4">Almoço</h3>
                    <p>A carregar ementas{dots}</p>
                  </div>
                </div>

                <div className="col-12 col-md-6 py-4">
                  <div className="item-inner shadow rounded-4 p-4 h-100">
                    <h3 className="item-heading mb-4">Jantar</h3>
                    <p>A carregar ementas{dots}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!loading && apiReturnedNothing && (
            <div className="day-block mb-5">
              <div className="section-header text-center mb-5">
                <h2 className="section-title mb-3">
                  {weekdayNames[todayIndex]}
                </h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 py-4">
                  <div className="item-inner shadow rounded-4 p-4 h-100">
                    <h3 className="item-heading mb-4">Almoço</h3>
                    <p>Não existem ementas disponíveis.</p>
                    <p>Provavelmente, encontra-se encerrado.</p>
                  </div>
                </div>

                <div className="col-12 col-md-6 py-4">
                  <div className="item-inner shadow rounded-4 p-4 h-100">
                    <h3 className="item-heading mb-4">Jantar</h3>
                    <p>Não existem ementas disponíveis.</p>
                    <p>Provavelmente, encontra-se encerrado.</p>
                  </div>
                </div>
              </div>
            </div>

          )}

          {!loading &&
            weekData
              .filter((day) => day.data && day.data.length > 0)
              .map((day, index) => {
                const meals = day.data.filter((m) =>
                  m.Refeitorios.some(
                    (r) => normalizeString(r) === normalizedSelected
                  )
                );

                const grouped = groupByPeriod(meals);

                return (
                  <div className="day-block mb-5" key={index}>
                    <div className="section-header text-center mb-5">
                      <h2 className="section-title mb-3">
                        {weekdayNames[day.date.getDay()]}
                      </h2>
                    </div>

                    <div className="row">
                      {/* Almoço */}
                      <div className="col-12 col-md-6 py-4">
                        <div className="item-inner shadow rounded-4 p-4 h-100">
                          <h3 className="item-heading mb-4">Almoço</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                grouped["Almoço"] &&
                                grouped["Almoço"].length > 0
                                  ? generateMenuHTML(grouped["Almoço"])
                                  : "<p class='text-muted'>Encontra-se encerrado.</p>",
                            }}
                          />
                        </div>
                      </div>

                      {/* Jantar */}
                      <div className="col-12 col-md-6 py-4">
                        <div className="item-inner shadow rounded-4 p-4 h-100">
                          <h3 className="item-heading mb-4">Jantar</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                grouped["Jantar"] &&
                                grouped["Jantar"].length > 0
                                  ? generateMenuHTML(grouped["Jantar"])
                                  : "<p class='text-muted'>Encontra-se encerrado.</p>",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>
    </main>
  );
}

export default WeekSection;