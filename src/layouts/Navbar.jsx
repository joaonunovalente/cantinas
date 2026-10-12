import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo-color.svg";
import hyperlink from "../assets/images/hyperlink.png";
import hyperlinkPurple from "../assets/images/hyperlink-purple.png";
import maisInformacoes from "../data/maisInformacoes";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
    // Bootstrap controla a classe .show via JS; remove para fechar no mobile.
    document.getElementById("navigation")?.classList.remove("show");
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-xl" aria-label="Navegação principal">
          <div className="site-logo me-3">
            <Link className="navbar-brand" to="/" onClick={closeMenu}>
              <img className="logo-icon" src={logo} alt="Cantinas.pt - página inicial" />
            </Link>
          </div>

          <button
            className={`navbar-toggler ${expanded ? "" : "collapsed"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded={expanded}
            aria-label={expanded ? "Fechar navegação" : "Abrir navegação"}
            onClick={() => setExpanded((v) => !v)}
          >
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
          </button>

          <div className="collapse navbar-collapse ms-auto" id="navigation">
            <ul className="navbar-nav ms-auto align-items-xl-center">
              <li className="nav-item me-lg-4">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                  Hoje
                </NavLink>
              </li>
              <li className="nav-item me-lg-4">
                <NavLink className="nav-link" to="/semana" onClick={closeMenu}>
                  Semana
                </NavLink>
              </li>
              <li className="nav-item me-lg-4">
                <NavLink className="nav-link" to="/horarios-precario" onClick={closeMenu}>
                  Horários e Preçário
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown me-lg-4">
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
              </li> */}
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
                      <Link className="dropdown-item" to={item.href} onClick={closeMenu}>
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
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Portal MySAS{" "}
                      <img
                        className="hyperlink"
                        src={isHovered ? hyperlinkPurple : hyperlink}
                        alt="Ligação para o Portal MySAS"
                      />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="dropdown-item"
                      href="https://blog.cantinas.pt/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Blog{" "}
                      <img
                        className="hyperlink"
                        src={isHovered ? hyperlinkPurple : hyperlink}
                        alt="Ligação para o Blog do Cantinas.pt"
                      />
                    </a>
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
