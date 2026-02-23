import PageLayout from "../layouts/PageLayout";
import ArticleBreadcrumb from "../components/article/ArticleBreadcrumb";
import ArticleSidebar from "../components/article/ArticleSidebar";
import ArticleContent from "../components/article/ArticleContent";
import ArticleRatingSection from "../components/article/article-content/ArticleRatingSection";
import ArticleSocialShareSection from "../components/article/ArticleSocialShareSection";
import RelatedArticlesSection from "../components/article/RelatedArticlesSection";

function ArticlePage() {
  return (
    <PageLayout>
      <ArticleBreadcrumb />

      <div className="help-content-wrapper theme-section pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <section className="main-section mb-2">
                <ArticleContent />
                <ArticleRatingSection />
                <ArticleSocialShareSection />
                <RelatedArticlesSection />
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
