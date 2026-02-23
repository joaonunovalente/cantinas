import PageLayout from "../layouts/PageLayout";
import HelpBreadcrumb from "../components/category/HelpBreadcrumb.jsx";
import CategoryArticleList from "../components/category/CategoryArticleList.jsx";
import CategorySidebar from "../components/category/CategorySidebar.jsx";
import articles from "../data/articles";
import sidebarCategories from "../data/sidebarCategories";

function CategoryPage() {
  return (
    <PageLayout>
      <HelpBreadcrumb currentPage="Getting Started" />

      <div className="help-content-wrapper theme-section pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <CategoryArticleList
                heading="Getting Started"
                intro="In this section, we'll guide you through the initial steps to set up your Momentum account. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                articles={articles}
              />
            </div>

            <div className="col-lg-4 col-xl-3 order-lg-first">
              <CategorySidebar
                title="Categories"
                categories={sidebarCategories}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default CategoryPage;
