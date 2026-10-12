import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes, legacyRedirects } from "./routes/routeConfig.jsx";

function App() {
  return (
    <Suspense
      fallback={
        <div className="container text-center py-5" role="status">
          A carregar página…
        </div>
      }
    >
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {legacyRedirects.map((path) => (
          <Route key={path} path={path} element={<Navigate to="/" replace />} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
