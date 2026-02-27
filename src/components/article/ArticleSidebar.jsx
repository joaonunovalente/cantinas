import { Link } from "react-router-dom";
import maisInformacoes from "../../data/maisInformacoes";

function ArticleSidebar() {
  return (
    <div className="col-lg-8 col-xl-8 mb-2 mb-lg-0">
      <div className="side-bar pt-5 pt-lg-0 sticky">
        <h3 className="side-bar-heading mb-4">Mais Informações</h3>
        <nav className="side-bar-nav">
          <ul className="sidebar-nav-items list-unstyled flex-column">
            {maisInformacoes.map((informacao) => (
              <li className="nav-item" key={informacao.title}>
                <Link to={informacao.href}>{informacao.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ArticleSidebar;
