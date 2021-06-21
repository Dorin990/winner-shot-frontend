import Avatar from "../components/Avatar";
import { TextField, Grid, Button } from "@material-ui/core";
import styled from "styled-components";
import { useAppSelector } from "../state/hooks";

const Wrapper = styled.div`
  margin: 5%;
  div:only-child {
    margin-bottom: 5%;
  }
`;
const Signout = styled(Button)`
  &.MuiButton-contained {
    background-color: red;
    color: white;
  }
`;

export default function Settings() {
  const { firstName, lastName, imageUrl } = useAppSelector(
    (state) => state.user
  );

  return (
    <Wrapper>
      <Avatar imageUrl={imageUrl} />
      <Grid container>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="שם פרטי"
            variant="outlined"
            value={firstName}
            disabled
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="שם משפחה"
            variant="outlined"
            value={lastName}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Signout fullWidth variant="contained">
            התנתק
          </Signout>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
