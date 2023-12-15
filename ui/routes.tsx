import { lazy } from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

const HomePage = lazy(() => import("/ui/pages/home/home-page"));
const NotFoundPage = lazy(() => import("/ui/pages/not-found/not-found-page"));

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFoundPage /> }
];

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {routes.map((route) => (
          <Route key={route.path} {...route} index={route.path === "/"} />
        ))}
      </ReactRoutes>
    </BrowserRouter>
  );
}
