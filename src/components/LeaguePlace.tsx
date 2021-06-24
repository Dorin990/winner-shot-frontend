import styled from "styled-components";
import { Avatar, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Wrapper = styled(Grid)`
  border-bottom: 1px solid black;
  cursor: pointer;
  padding: 5%;
`;

const Place = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
`;

interface ScoreProps {
  bold?: boolean;
}
const Score = styled.div<ScoreProps>`
  ${(props) => props.bold && "font-weight: bold;"}
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

interface Props {
  user: IUser;
  place: number;
}
export default function LeaguePlace({ user, place }: Props) {
  const history = useHistory();
  const onUserClick = () => {
    history.push(`/settings/${user.id}`);
  };

  return (
    <Wrapper container onClick={onUserClick}>
      <Grid item xs={1}>
        <Place>{place + 1}.</Place>
      </Grid>
      <Grid item xs={2}>
        <Avatar style={{ zIndex: 0 }} src={user.imageUrl} />
      </Grid>
      <Grid item xs={2}>
        <Score>{user.score?.bulls}</Score>
      </Grid>
      <Grid item xs={2}>
        <Score>{user.score?.corrects}</Score>
      </Grid>
      <Grid item xs={2}>
        <Score>{user.score?.wrongs}</Score>
      </Grid>
      <Grid item xs={3}>
        <Score bold>{user.score?.points}</Score>
      </Grid>
    </Wrapper>
  );
}
