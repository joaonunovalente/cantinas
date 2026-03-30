import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children, hero }) {
  return (
    <>
      <div className="site-shell">
        <div className="page-header-wrapper">
          <>
            <div className="bg-success text-white text-center py-2 small fw-semibold">
              As ementas das cantinas voltaram a estar disponíveis em <a className="text-dark" href="https://cms.ua.pt/ementas/">cms.ua.pt/ementas</a> .
            </div>
            <div className="bg-warning text-dark text-center py-2 small fw-semibold">
              Este projeto foi arquivado, podendo ser consultada a versão funcional <a href="https://demo.cantinas.pt">demo.cantinas.pt</a> . Lê a <a className=" text-decoration-underline" href="/carta-de-despedida">Carta de Despedida</a>.
            </div>
          </>

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
