import Play from "./Play";
import Settings from "./Settings";
import Leagues from "./Leagues";
import League from "./League";
import Home from "./Home";

const pages = [
  { component: Play, path: "/", requiresAuth: true },
  { component: Settings, path: "/settings", requiresAuth: true },
  { component: Settings, path: "/settings/:userId", requiresAuth: true },
  { component: Leagues, path: "/leagues", requiresAuth: true },
  { component: League, path: "/leagues/:leagueName", requiresAuth: true },
  { component: Home, path: "/", requiresAuth: false },
  { component: Play, path: "*", requiresAuth: true },
  { component: Home, path: "*", requiresAuth: false },
];

export default pages;
