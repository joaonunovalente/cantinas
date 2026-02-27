import PageLayout from "../../layouts/PageLayout";
import ArticleSidebar from "../article/ArticleSidebar";

function Article({ hero, children }) {
  return (
    <PageLayout hero={hero}>
      <div className="m-4"></div>

      <div className="help-content-wrapper py-5 container">
        <div className="row gy-5">
          <div className="col-12 col-lg-2 order-2 order-lg-1 mb-4 mb-lg-0">
            <ArticleSidebar />
          </div>

          <div className="col-12 col-lg-8 order-1 order-lg-2">
            <section>{children}</section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Article;