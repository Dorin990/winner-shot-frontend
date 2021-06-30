import Play from "./Play";
import Settings from "./Settings";
import Leagues from "./Leagues";
import League from "./League";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";

export const pages = [
  { component: Play, path: "/", requiresAuth: true },
  { component: Settings, path: "/settings", requiresAuth: true },
  { component: Settings, path: "/settings/:userId", requiresAuth: true },
  { component: Leagues, path: "/leagues", requiresAuth: true },
  { component: League, path: "/leagues/:leagueName", requiresAuth: true },
  { component: Home, path: "/", requiresAuth: false },
  { component: Play, path: "*", requiresAuth: true },
  { component: Home, path: "*", requiresAuth: false },
];

export default function Routes() {
  const { isAuthenticated, isLoading } = useAuth0();

  // All routes according to auth state
  const pagesRoutes =
    !isLoading &&
    pages
      .filter((page) => page.requiresAuth === isAuthenticated)
      .map((page) => (
        <Route
          exact={page.path !== "*"}
          key={page.path}
          path={page.path}
          component={page.path !== "*" ? page.component : undefined}
        >
          {page.path === "*" && <Redirect to="/" />}
        </Route>
      ));
  return <>{pagesRoutes}</>;
}
