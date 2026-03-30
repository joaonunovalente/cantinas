import ContactoPage from "../pages/ContactoPage";
import HomePage from "../pages/HomePage";
import HorariosPrecarioPage from "../pages/HorariosPrecarioPage";
import NotFoundPage from "../pages/NotFoundPage";
import FaqPage from "../pages/FaqPage";
import SemanaPage from "../pages/SemanaPage";
import SobreCantinasPage from "../pages/SobreCantinasPage";
import CartaDeDespedidaPage from "../pages/CartaDeDespedidaPage";

const appRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/semana",
    element: <SemanaPage />,
  },
  {
    path: "/horarios-precario",
    element: <HorariosPrecarioPage />,
  },
  {
    path: "/sobre",
    element: <SobreCantinasPage />,
  },
  {
    path: "/perguntas-frequentes",
    element: <FaqPage />,
  },
  {
    path: "/carta-de-despedida",
    element: <CartaDeDespedidaPage />,
  },
  {
    path: "/contacto",
    element: <ContactoPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const legacyRedirects = ["/index.html"];

export { appRoutes, legacyRedirects };
