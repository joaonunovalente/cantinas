import { lazy } from "react";

const ContactoPage = lazy(() => import("../pages/ContactoPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const HorariosPrecarioPage = lazy(() => import("../pages/HorariosPrecarioPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const SemanaPage = lazy(() => import("../pages/SemanaPage"));
const SobreCantinasPage = lazy(() => import("../pages/SobreCantinasPage"));
const CartaDeDespedidaPage = lazy(() => import("../pages/CartaDeDespedidaPage"));

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
