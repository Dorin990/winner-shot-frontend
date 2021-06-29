import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import styled from "styled-components";
import { PlayArrow, Settings, ShowChart } from "@material-ui/icons";

const StickyNavigation = styled(BottomNavigation)`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 2;
`;

interface Props {
  innerRef:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
}

const buttons = [
  { label: "הגדרות", value: "/settings", icon: <Settings /> },
  { label: "שחק", value: "/", icon: <PlayArrow /> },
  { label: "ליגות", value: "/leagues", icon: <ShowChart /> },
];

export default function CustomBottomNavigation({ innerRef }: Props) {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  return (
    <StickyNavigation
      ref={innerRef}
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
    >
      {buttons.map((button) => (
        <BottomNavigationAction
          key={button.value}
          label={button.label}
          value={button.value}
          icon={button.icon}
        />
      ))}
    </StickyNavigation>
  );
}
