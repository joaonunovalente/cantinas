import { Link } from "react-router-dom";

function CategoryArticleList({ heading, intro, articles }) {
  return (
    <section className="main-section order-lg-last mb-5">
      <h2 className="main-section-heading mb-4">{heading}</h2>
      <div className="intro mb-5">{intro}</div>

      <ul className="article-list list-unstyled">
        {articles.map((article) => (
          <li className="list-item" key={article}>
            <div className="help-article-icon-holder flex-shrink-0"></div>
            <Link to="/article">{article}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoryArticleList;
