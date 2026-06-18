import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children, hero }) {
  return (
    <>
      <div className="site-shell">
        <div className="page-header-wrapper">
          <div className="text-center px-3 py-2 small fw-semibold" style={{ background: '#2d6a4f', color: '#fff' }}>
            Existe um projeto alternativo que também disponibiliza as ementas em {' '}
            <a className="fw-bold" href="https://ementas.cantinas.pt" style={{ color: '#95d5b2' }}>ementas.cantinas.pt</a>.
          </div>
          <div className="text-center px-3 py-2 small fw-semibold" style={{ background: '#e8c547', color: '#1a1a1a' }}>
            Este projeto foi arquivado. A versão funcional está disponível em{' '}
            <a className="fw-bold" href="https://demo.cantinas.pt" style={{ color: '#1b4d3e' }}>demo.cantinas.pt</a>
            . Lê a{' '}
            <a className="text-decoration-underline" href="/carta-de-despedida" style={{ color: '#1b4d3e' }}>Carta de Despedida</a>.
          </div>

          <div className="page-header-bg-pattern-holder">
            <div className="bg-pattern-top"></div>
            <div className="bg-pattern-bottom"></div>
          </div>
          <Navbar />
          {hero}
        </div>

        {children}
        <Footer />
      </div>
    </>
  );
}

export default PageLayout;
