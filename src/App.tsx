import { BrowserRouter as Router, Switch } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Routes from "./pages";
import { useAppDispatch } from "./state/hooks";
import { setUser, markAsNotFound } from "./state/user";
import { useAuth0 } from "@auth0/auth0-react";
import { useSecureFetch } from "./utils/hooks";
import NewUserDialog from "./components/NewUserDialog";

const FillApp = styled.div<{ bottom: number }>`
  margin-bottom: calc(${(props) => props.bottom}px + 5%);
`;

function App() {
  const bottomNavigationRef = useRef(null as null | HTMLDivElement);
  const [bottomHeight, setBottomHeight] = useState(0);
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAuth0();
  const getCurrentUser = useSecureFetch("users", "GET");

  // Set the body height according to the bottom navigation height
  useEffect(() => {
    if (bottomNavigationRef.current) {
      setBottomHeight(bottomNavigationRef.current.offsetHeight);
    }
  }, [bottomNavigationRef, isAuthenticated]);

  // Initial loading
  useEffect(() => {
    (async function () {
      if (!user) return;
      try {
        const userData = await getCurrentUser();
        dispatch(
          setUser({
            id: userData.id,
            name: userData.name,
            imageUrl: user.picture ?? "",
          })
        );
      } catch (error) {
        // User not found - create one
        dispatch(markAsNotFound());
      }
    })();
  }, [dispatch, getCurrentUser, user]);

  return (
    <Router>
      <Switch>
        <FillApp bottom={bottomHeight}>
          <Routes />
        </FillApp>
      </Switch>
      <NewUserDialog />
      {isAuthenticated && <BottomNavigation innerRef={bottomNavigationRef} />}
    </Router>
  );
}

export default App;
