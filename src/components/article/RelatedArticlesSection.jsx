import { Link } from 'react-router-dom';
import relatedArticles from '../../data/popularArticles';

function RelatedArticlesSection() {
  return (
    <section className="related-articles-section theme-section rounded-4 shadow px-4 p-lg-5">
      <h2 className="section-title mb-5">Related Articles</h2>
      <div className="related-items row">
        {relatedArticles.map((article) => (
          <div className="item d-flex col-12 col-lg-6" key={article.title}>
            <div className="help-article-icon-holder flex-shrink-0"></div>
            <div className="item-content">
              <h3 className="item-title"><Link to="/article">{article.title}</Link></h3>
              <div className="item-excerpt">{article.excerpt}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedArticlesSection;
