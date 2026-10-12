import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes, legacyRedirects } from "./routes/routeConfig.jsx";

function App() {
  return (
    <Routes>
      {appRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {legacyRedirects.map((path) => (
        <Route key={path} path={path} element={<Navigate to="/" replace />} />
      ))}
    </Routes>
  );
}

export default App;
