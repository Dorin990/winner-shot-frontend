import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pages from "./pages";
import BottomNavigation from "./components/BottomNavigation";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const FillApp = styled.div<{ bottom: number }>`
  margin-bottom: calc(${(props) => props.bottom}px + 5%);
`;

function App() {
  const bottomNavigationRef = useRef(null as null | HTMLDivElement);
  const [bottomHeight, setBottomHeight] = useState(0);
  const pagesRoutes = pages.map((page) => (
    <Route
      exact
      key={page.name.toLowerCase()}
      path={`/${page.name.toLowerCase()}`}
    >
      {page}
    </Route>
  ));

  useEffect(() => {
    console.log(bottomNavigationRef);
    if (bottomNavigationRef.current) {
      setBottomHeight(bottomNavigationRef.current.offsetHeight);
    }
  }, [bottomNavigationRef]);

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
