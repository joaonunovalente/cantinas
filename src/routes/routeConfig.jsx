import HomePage from "../pages/HomePage";
import SemanaPage from "../pages/SemanaPage";
import NotFoundPage from "../pages/NotFoundPage";

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
    path: "*",
    element: <NotFoundPage />,
  },
];

const legacyRedirects = ["/index.html"];

export { appRoutes, legacyRedirects };
