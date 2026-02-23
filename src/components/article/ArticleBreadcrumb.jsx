import { Link } from 'react-router-dom';

function ArticleBreadcrumb() {
  return (
    <div className="help-breadcrumb-container pt-4">
      <div className="container">
        <nav style={{ '--bs-breadcrumb-divider': "'>'" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/help-category.html">Getting Started</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Help Article Lorem Ipsum Dolor</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default ArticleBreadcrumb;
