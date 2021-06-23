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

interface Props {
  setOpen: (value: boolean) => void;
}
export default function AddLeagueButton({ setOpen }: Props) {
  return (
    <StickyButton
      color="primary"
      size="small"
      onClick={() => {
        setOpen(true);
      }}
    >
      <AddIcon />
    </StickyButton>
  );
}
