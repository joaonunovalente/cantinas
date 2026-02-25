import { Link } from "react-router-dom";

function PopularArticles({ articles }) {
  return (
    <section className="help-featured-section theme-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title mb-3">Popular Articles</h2>
        </div>

        <div className="row align-content-stretch">
          {articles.map((article) => (
            <div
              className="item col-12 col-md-6 col-lg-3 py-4 p-md-4"
              key={article.title}
            >
              <div className="item-inner shadow rounded-4 p-4">
                <Link className="item-link" to={article.href}>
                  <h3 className="item-heading">
                    <div className="help-article-icon-holder mb-2"></div>
                    {article.title}
                  </h3>
                  <div className="item-desc">
                    <span className="rate-icon me-2">
                      <i className="fa-solid fa-thumbs-up"></i>
                    </span>
                    {article.helpful}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularArticles;
