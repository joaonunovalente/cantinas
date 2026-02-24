import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo-color.svg";
import unidadesAlimentares from "../data/unidadesAlimentares";
import maisInformacoes from "../data/maisInformacoes";

function Header() {
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
                <NavLink className="nav-link" to="/">
                  Hoje
                </NavLink>
              </li>
              <li className="nav-item me-lg-4">
                <NavLink className="nav-link" to="/semana">
                  Semana
                </NavLink>
              </li>
              <li className="nav-item me-lg-4">
                <NavLink className="nav-link" to="/horarios-precario">
                  Horários e Preçário
                </NavLink>
              </li>
              <li className="nav-item dropdown me-lg-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Unidades Alimentares
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end rounded shadow">
                  {unidadesAlimentares.map((unidade) => (
                    <li key={unidade.title}>
                      <Link className="dropdown-item" to={unidade.href}>
                        {unidade.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown me-lg-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mais informações
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end rounded shadow">
                  {maisInformacoes.map((item) => (
                    <li key={item.title}>
                      <Link className="dropdown-item" to={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mysas.ua.pt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portal MySAS
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item pt-3 pt-lg-0">
                <a
                  className="nav-btn btn btn-primary text-white"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/product/devdesk-free-bootstrap-5-knowledge-base-help-centre-template-for-tech-products/"
                >
                  Portal MySAS
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
