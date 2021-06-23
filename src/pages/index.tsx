import Play from "./Play";
import Settings from "./Settings";
import Leagues from "./Leagues";
import League from "./League";

const pages = [
  { component: Play, path: "/play" },
  { component: Settings, path: "/settings" },
  { component: Settings, path: "/settings/:userId" },
  { component: Leagues, path: "/leagues" },
  { component: League, path: "/leagues/:leagueName" },
];

export default pages;
