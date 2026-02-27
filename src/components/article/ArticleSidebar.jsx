import { Link } from "react-router-dom";
import maisInformacoes from "../../data/maisInformacoes";

function ArticleSidebar() {
  return (
    <div className="side-bar sticky mt-1">
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
  );
}

export default ArticleSidebar;
