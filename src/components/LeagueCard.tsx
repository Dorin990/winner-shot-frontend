import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  padding: 5%;
  border-bottom: 1px solid black;
  display: flex;
  cursor: pointer;
`;

const Details = styled.div`
  margin-inline-start: 5%;
`;

const LeagueName = styled.div`
  font-weight: bold;
`;

const Detail = styled.div``;

interface Props {
  league: ILeague;
}
export default function LeagueCard({ league }: Props) {
  const history = useHistory();

  const onLeagueClick = () => {
    history.push(`/leagues/${league.name}`);
  };

  return (
    <Wrapper onClick={onLeagueClick}>
      <Avatar>{league.name[0]}</Avatar>
      <Details>
        <LeagueName>{league.name}</LeagueName>
        <Detail>
          מיקומך הוא {league.userPlace} מתוך {league.count}
        </Detail>
      </Details>
    </Wrapper>
  );
}
