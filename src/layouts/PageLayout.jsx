import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import categories from '../data/categories';

function PageLayout({ children, heroTitle, heroDescription }) {
  return (
    <>
      <div className="page-header-wrapper">
        <div className="page-header-bg-pattern-holder">
          <div className="bg-pattern-top"></div>
          <div className="bg-pattern-bottom"></div>
        </div>
        <Header categoriesList={categories} />
        <Hero title={heroTitle} description={heroDescription} />
      </div>

      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
