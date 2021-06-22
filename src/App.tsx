import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import pages from "./pages";
import { useAppDispatch } from "./state/hooks";
import { setUser } from "./state/user";

const FillApp = styled.div<{ bottom: number }>`
  margin-bottom: calc(${(props) => props.bottom}px + 5%);
`;

function App() {
  const bottomNavigationRef = useRef(null as null | HTMLDivElement);
  const [bottomHeight, setBottomHeight] = useState(0);
  const dispatch = useAppDispatch();

  const pagesRoutes = pages.map((page) => (
    <Route exact key={page.path} path={page.path} component={page.component} />
  ));

  useEffect(() => {
    if (bottomNavigationRef.current) {
      setBottomHeight(bottomNavigationRef.current.offsetHeight);
    }
  }, [bottomNavigationRef]);

  // Initial loading
  useEffect(() => {
    dispatch(
      setUser({
        id: 1,
        firstName: "אופיר",
        lastName: "רבי",
        imageUrl:
          "https://lh3.googleusercontent.com/ogw/ADea4I5OQ4d6jHTjKyiWS7F_dTcKEVAN3UA0eoU2RxenJA=s83-c-mo",
      })
    );
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <FillApp bottom={bottomHeight}>{pagesRoutes}</FillApp>
      </Switch>
      <BottomNavigation innerRef={bottomNavigationRef} />
    </Router>
  );
}

export default App;
