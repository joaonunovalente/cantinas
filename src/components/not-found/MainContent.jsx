function MainContent() {
  return (
    <section className="help-featured-section theme-section">
      <div className="container">
        <div className="section-header mb-3 text-center">
          <h2 className="section-title mb-5">Página não encontrada</h2>

          <div className="d-flex justify-content-center">
            <div className="col-lg-6">
              <p className="mb-4 text-start">
                Segue as ligações abaixo para navegar pelo site:
              </p>

              <ul className="list-group shadow-sm">
                <li className="list-group-item d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-calendar-check me-3 text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.854 6.146a.5.5 0 0 0-.708.708L11.293 8l-1.147 1.146a.5.5 0 0 0 .708.708L12 8.707l1.146 1.147a.5.5 0 0 0 .708-.708L12.707 8l1.147-1.146a.5.5 0 0 0-.708-.708L12 7.293 10.854 6.146z" />
                    <path d="M1 2a1 1 0 0 1 1-1h1v1a.5.5 0 0 0 1 0V1h6v1a.5.5 0 0 0 1 0V1h1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm1 1v10h10V3H2z" />
                  </svg>
                  <a href="/" className="text-decoration-none">
                    Hoje
                  </a>
                </li>

                <li className="list-group-item d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-calendar-week me-3 text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 1 .5.5V2h6V1a.5.5 0 0 1 1 0v1h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V1a.5.5 0 0 1 .5-.5zM1 4v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    <path d="M2.5 6h1v4h-1V6zm2 0h1v4h-1V6zm2 0h1v4h-1V6zm2 0h1v4h-1V6z" />
                  </svg>
                  <a href="/semana" className="text-decoration-none">
                    Semana
                  </a>
                </li>

                <li className="list-group-item d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-clock-history me-3 text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.515 3.61a.5.5 0 0 0-.53-.434l-2.002.275a.5.5 0 1 0 .122.992l1.12-.154v2.314a.5.5 0 0 0 1 0V3.61z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z" />
                  </svg>
                  <a href="/horarios-precario" className="text-decoration-none">
                    Horários e Preçário
                  </a>
                </li>

                <li className="list-group-item d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-info-circle me-3 text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 .875-.252 1.02-.598l.088-.416c.066-.314.176-.36.47-.288l.088.016.082-.38-.45-.083c-.294-.07-.352-.176-.288-.469l.738-3.468c.194-.897-.105-1.319-.808-1.319-.545 0-.875.252-1.02.598l-.088.416c-.066.314-.176.36-.47.288l-.088-.016z" />
                  </svg>
                  <a href="/sobre" className="text-decoration-none">
                    Sobre o Cantinas.pt
                  </a>
                </li>

                <li className="list-group-item d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-question-circle me-3 text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2z" />
                    <path d="M5.255 5.786c.202-.42.598-.686 1.058-.686.56 0 .875.314.875.787 0 .414-.287.635-.812.918-.596.32-.822.54-.822 1.073v.07h1v-.07c0-.414.288-.635.812-.918.596-.32.822-.54.822-1.073 0-.847-.617-1.366-1.535-1.366-.873 0-1.354.514-1.526 1.057l.928.281zM8 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  <a
                    href="/perguntas-frequentes"
                    className="text-decoration-none"
                  >
                    Perguntas Frequentes
                  </a>
                </li>

                <li className="list-group-item d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope me-3 text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                    <path d="M.05 4.555L8 9.414l7.95-4.86A1 1 0 0 0 15 4H1a1 1 0 0 0-.95.555z" />
                  </svg>
                  <a href="/contacto" className="text-decoration-none">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
