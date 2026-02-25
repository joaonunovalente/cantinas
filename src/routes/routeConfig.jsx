import HomePage from "../pages/HomePage";
import HorariosPrecarioPage from "../pages/HorariosPrecarioPage"
import NotFoundPage from "../pages/NotFoundPage";
import SemanaPage from "../pages/SemanaPage";

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
    path: "*",
    element: <NotFoundPage />,
  },
];

const legacyRedirects = ["/index.html"];

export { appRoutes, legacyRedirects };
