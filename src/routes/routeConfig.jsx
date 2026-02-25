import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const appRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const legacyRedirects = ["/index.html"];

export { appRoutes, legacyRedirects };
