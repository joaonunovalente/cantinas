import PageLayout from "../../layouts/PageLayout";
import ArticleSidebar from "../article/ArticleSidebar";

function Article({ hero, children }) {
  return (
    <PageLayout hero={hero}>
      <div className="m-3"></div>
      <main className="container my-5">
        <div className="help-content-wrapper container mb-3 mb-lg-5">
          <div className="row gy-5">
            <div className="col-12 col-lg-2 order-2 order-lg-1">
              <ArticleSidebar />
            </div>

            <div className="col-12 col-lg-8 order-1 order-lg-2">
              <section>{children}</section>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

export default Article;
