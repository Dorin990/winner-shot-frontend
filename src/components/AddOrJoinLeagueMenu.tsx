import Dialog from "./Dialog";
import { Grid, Button } from "@material-ui/core";
import styled from "styled-components";

const BigButton = styled(Button)`
  &.MuiButton-Base {
    height: 100%;
    width: 100%;
  }
`;

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}
export default function AddOrJoinLeagueMenu({ open, setOpen }: Props) {
  return (
    <Dialog open={open} setOpen={setOpen} title="מה ברצונך לעשות?">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BigButton variant="contained" color="primary">
            ליצור ליגה חדשה
          </BigButton>
        </Grid>
        <Grid item xs={6}>
          <BigButton variant="contained" color="primary">
            להצטרף לליגה קיימת
          </BigButton>
        </Grid>
      </Grid>
    </Dialog>
  );
}
