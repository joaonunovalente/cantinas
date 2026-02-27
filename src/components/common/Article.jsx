import PageLayout from "../../layouts/PageLayout";
import ArticleSidebar from "../article/ArticleSidebar";

function Article({ hero, children }) {
  return (
    <PageLayout hero={hero}>
      <div className="m-5"></div>

      <div className="help-content-wrapper theme-section pt-4 container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <section className="main-section">{children}</section>
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

export default Article;