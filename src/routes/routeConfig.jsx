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
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/article",
    element: <ArticlePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const legacyRedirects = ["/index.html", "/help-category.html", "/help-article.html"];

export { appRoutes, legacyRedirects };
