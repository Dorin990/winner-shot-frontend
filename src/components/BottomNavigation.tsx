import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import styled from "styled-components";
import { PlayArrow } from "@material-ui/icons";

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

const buttons = [{ label: "שחק", value: "play", icon: <PlayArrow /> }];

export default function CustomBottomNavigation({ innerRef }: Props) {
  const [value, setValue] = useState("play");
  const history = useHistory();
  return (
    <StickyNavigation
      ref={innerRef}
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);
        history.push(`/${newValue}`);
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
