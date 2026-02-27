import PageLayout from "../layouts/PageLayout";
import ArticleSidebar from "../components/article/ArticleSidebar";
import ArticleContent from "../components/article/ArticleContent";

import Hero from "../components/article/Hero";


function ArticlePage() {
  return (
    <PageLayout hero={<Hero />}>
      <div className="m-5"></div>

      <div className="help-content-wrapper theme-section pt-4 container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <section className="main-section mb-2">
                <ArticleContent />
              </section>
            </div>

            <div className="col-lg-4 col-xl-3 order-lg-first ps-4 p-md-0">
              <ArticleSidebar />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ArticlePage;
