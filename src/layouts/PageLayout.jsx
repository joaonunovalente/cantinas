import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children, hero }) {
  return (
    <>
      <div className="site-shell">
        <div className="page-header-wrapper">
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
