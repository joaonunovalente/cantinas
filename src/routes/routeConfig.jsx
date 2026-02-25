import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ArticlePage from "../pages/ArticlePage";
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
