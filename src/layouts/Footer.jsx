import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo-color.svg";

const footerLinks = [
  { to: "/", label: "Hoje" },
  { to: "/semana", label: "Semana" },
  { to: "/horarios-precario", label: "Horários e Preçário" },
  { to: "/sobre", label: "Sobre" },
  { to: "/perguntas-frequentes", label: "Perguntas Frequentes" },
  { to: "/contacto", label: "Contacto" },
];

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="footer-bg-pattern-holder" aria-hidden="true">
        <div className="footer-bg-pattern-top"></div>
        <div className="footer-bg-pattern-bottom"></div>
      </div>
      <div className="container text-center">
        <img className="logo-icon mb-3" src={logo} alt="Logo do Cantinas.pt" />
        <nav aria-label="Navegação do rodapé">
          <ul className="footer-links list-inline mb-0">
            {footerLinks.map((link) => (
              <li key={link.to} className="list-inline-item">
                <NavLink className="footer-link" to={link.to}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
