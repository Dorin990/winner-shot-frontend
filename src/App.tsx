import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import pages from "./pages";
import { useAppDispatch } from "./state/hooks";
import { setUser } from "./state/user";
import { useAuth0 } from "@auth0/auth0-react";

const FillApp = styled.div<{ bottom: number }>`
  margin-bottom: calc(${(props) => props.bottom}px + 5%);
`;

function App() {
  const bottomNavigationRef = useRef(null as null | HTMLDivElement);
  const [bottomHeight, setBottomHeight] = useState(0);
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

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

  // Set the body height according to the bottom navigation height
  useEffect(() => {
    if (bottomNavigationRef.current) {
      setBottomHeight(bottomNavigationRef.current.offsetHeight);
    }
  }, [bottomNavigationRef]);

  // Initial loading
  useEffect(() => {
    if (!user) return;
    dispatch(
      setUser({
        id: "1",
        name: user.name ?? "",
        imageUrl: user.picture ?? "",
      })
    );
  }, [dispatch, user]);

  return (
    <Router>
      <Switch>
        <FillApp bottom={bottomHeight}>{pagesRoutes}</FillApp>
      </Switch>
      {isAuthenticated && <BottomNavigation innerRef={bottomNavigationRef} />}
    </Router>
  );
}

export default App;
