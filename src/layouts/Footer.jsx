import logo from "../assets/images/logo/logo-color.svg";

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container text-center">
        <img className="logo-icon" src={logo} alt="Logo do Cantinas.pt" />
      </div>
    </footer>
  );
}

export default Footer;
