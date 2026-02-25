import HomePage from "../pages/HomePage";
import HorariosPrecarioPage from "../pages/HorariosPrecarioPage";
import NotFoundPage from "../pages/NotFoundPage";
import SemanaPage from "../pages/SemanaPage";
import SobreCantinasPage from "../pages/SobreCantinasPage";

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
    path: "*",
    element: <NotFoundPage />,
  },
];

const legacyRedirects = ["/index.html"];

export { appRoutes, legacyRedirects };
