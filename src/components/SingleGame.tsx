import styled from "styled-components";
import { Slider, Grid } from "@material-ui/core";
import { useState } from "react";

const TeamsWrapper = styled(Grid)``;

const Wrapper = styled.div`
  padding: 5%;
  margin: 5%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

interface TeamProps {
  $isHighlighted: boolean;
}
const Team = styled(Grid)<TeamProps>`
  ${(props) =>
    props.$isHighlighted &&
    `-webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    transition: box-shadow 0.5s ease-in-out;
`}
`;

const TeamName = styled.span`
  text-align: center;
  display: block;
  font-size: 18px;
`;

const TeamImage = styled.img`
  width: 100%;
`;

const MAX_RANGE = 25;
const POINTS_DIFFERENCE = 4;

interface Props {
  game: IGame;
}
export default function SingleGame({ game }: Props) {
  // Positive for home team, negative for away team
  const [winningRange, setWinningRange] = useState([0, POINTS_DIFFERENCE]);
  const [winningTeam, setWinningTeam] = useState(0);

  const handleWinningRangeChange = (newValue: any) => {
    if (newValue[0] !== winningRange[0]) {
      if (newValue[0] > MAX_RANGE - POINTS_DIFFERENCE + 1) {
        newValue[0] = MAX_RANGE - POINTS_DIFFERENCE + 1;
      }
      newValue[1] = newValue[0] + POINTS_DIFFERENCE;
    } else {
      if (newValue[1] < POINTS_DIFFERENCE) {
        newValue[1] = POINTS_DIFFERENCE;
      }
      newValue[0] = newValue[1] - POINTS_DIFFERENCE;
    }

    setWinningRange(newValue);
  };

  const rangeValueLable = (value: number) => {
    if (value > MAX_RANGE) {
      return `${MAX_RANGE + 1}+`;
    }

    return value;
  };

  const changeWinningTeam = (id: number) => {
    setWinningTeam(id);
  };

  return (
    <Wrapper>
      <TeamsWrapper container justify="space-between">
        <Team
          item
          xs={4}
          $isHighlighted={winningTeam === game.homeTeam.id}
          onClick={() => changeWinningTeam(game.homeTeam.id)}
        >
          <TeamName>{game.homeTeam.name}</TeamName>
          <TeamImage src={game.homeTeam.imageUrl} />
        </Team>
        <Team
          item
          xs={4}
          $isHighlighted={winningTeam === game.awayTeam.id}
          onClick={() => changeWinningTeam(game.awayTeam.id)}
        >
          <TeamName>{game.awayTeam.name}</TeamName>
          <TeamImage src={game.awayTeam.imageUrl} />
        </Team>
      </TeamsWrapper>
      <Slider
        value={winningRange}
        onChange={(event, newvalue) => handleWinningRangeChange(newvalue)}
        valueLabelFormat={rangeValueLable}
        valueLabelDisplay={
          winningRange[0] === 0 && winningRange[1] === 0 ? "off" : "on"
        }
        min={0}
        max={MAX_RANGE + 1}
      />
    </Wrapper>
  );
}
