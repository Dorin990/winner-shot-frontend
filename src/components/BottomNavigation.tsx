import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import styled from "styled-components";

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
export default function CustomBottomNavigation({ innerRef }: Props) {
  const [value, setValue] = useState("play");
  return (
    <StickyNavigation
      ref={innerRef}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Play" value="play" />
    </StickyNavigation>
  );
}
