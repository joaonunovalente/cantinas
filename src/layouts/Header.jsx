import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/images/logo/logo-color.svg";

function Header({ categoriesList }) {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="site-logo me-3">
            <Link className="navbar-brand" to="/">
              <img className="logo-icon" src={logo} alt="logo" />
            </Link>
          </div>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span> </span>
            <span> </span>
            <span> </span>
          </button>

          <div className="collapse navbar-collapse ms-auto" id="navigation">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item me-lg-4">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown me-lg-4">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end rounded shadow">
                  {categoriesList.map((category) => (
                    <li key={category.title}>
                      <Link className="dropdown-item" to={category.href}>{category.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item pt-3 pt-lg-0">
                <a
                  className="nav-btn btn btn-primary text-white"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/product/devdesk-free-bootstrap-5-knowledge-base-help-centre-template-for-tech-products/"
                >
                  Free Trial
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
