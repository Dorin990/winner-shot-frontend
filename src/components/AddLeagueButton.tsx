import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

const StickyButton = styled(Fab)`
  &.MuiFab-primary {
    position: absolute;
    top: 0;
    left: 0;
    margin: 5%;
  }
`;

export default function AddLeagueButton() {
  return (
    <StickyButton color="primary" size="small">
      <AddIcon />
    </StickyButton>
  );
}
