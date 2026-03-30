import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children, hero, topBanner }) {
  return (
    <>
      <div className="site-shell">
        <div className="page-header-wrapper">
          {topBanner && (
            <div className="bg-success text-white text-center py-2 small fw-semibold">
              As ementas das cantinas voltaram a estar disponíveis em <a href="https://cms.ua.pt/ementas">cms.ua.pt/ementas</a> .
            </div>
          )}

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
