import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  const pagesRoutes = pages
    .filter((page) => page.requiresAuth === isAuthenticated && !isLoading)
    .map((page) => (
      <Route
        exact
        key={page.path}
        path={page.path}
        component={page.component}
      />
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
    console.log(user);
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
