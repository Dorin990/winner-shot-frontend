import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pages from "./pages";

function App() {
  const pagesRoutes = pages.map((page) => (
    <Route
      exact
      key={page.name.toLowerCase()}
      path={`/${page.name.toLowerCase()}`}
    >
      {page}
    </Route>
  ));

  return (
    <Router>
      <Switch>{pagesRoutes}</Switch>
    </Router>
  );
}

export default App;
