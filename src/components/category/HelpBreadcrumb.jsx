import { Link } from 'react-router-dom';

function HelpBreadcrumb({ currentPage }) {
  return (
    <div className="help-breadcrumb-container pt-4">
      <div className="container">
        <nav style={{ '--bs-breadcrumb-divider': "'>'" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default HelpBreadcrumb;
