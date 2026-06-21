import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo-color.svg";

const footerLinks = [
  { to: "/", label: "Hoje" },
  { to: "/semana", label: "Semana" },
  { to: "/horarios-precario", label: "Horários e Preçário" },
  { to: "/sobre", label: "Sobre" },
  { to: "/perguntas-frequentes", label: "Perguntas Frequentes" },
  { to: "/carta-de-despedida", label: "Carta de Despedida" },

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
        <div className="text-center pt-4 small " style={{ color: '#c0c0c0' }}>
          O <strong>Cantinas.pt</strong> não tem qualquer afiliação com a Universidade de Aveiro.
        </div>
      </div>

    </footer>
  );
}

export default Footer;
