import styled from "styled-components";
import { Slider, Grid } from "@material-ui/core";
import { useState } from "react";
import Card from "./Card";

const TeamsWrapper = styled(Grid)``;

interface TeamProps {
  $isHighlighted: boolean;
}
const Team = styled(Grid)<TeamProps>`
  opacity: ${(props) => (props.$isHighlighted ? 1 : 0.4)};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TeamName = styled.span`
  text-align: center;
  display: block;
  font-size: 18px;
  margin: 2%;
`;

interface TeamImageProps {
  $isLoaded: boolean;
}
const TeamImage = styled.img<TeamImageProps>`
  width: 100%;
  ${(props) => !props.$isLoaded && `display: none`}
`;

const MAX_RANGE = 25;
const POINTS_DIFFERENCE = 4;

interface Props {
  game: IGame;
}
export default function SingleGame({ game }: Props) {
  const [winningRange, setWinningRange] = useState([0, POINTS_DIFFERENCE]);
  const [winningTeam, setWinningTeam] = useState(0);
  // Home and away teams
  const [teamsImagesToLoad, setTeamImagesToLoad] = useState(2);

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
    <Card>
      <div>
        <TeamsWrapper container justify="space-between">
          <Team
            item
            xs={4}
            $isHighlighted={winningTeam === game.homeTeam.id}
            onClick={() => changeWinningTeam(game.homeTeam.id)}
          >
            <TeamName>{game.homeTeam.name}</TeamName>
            <TeamImage
              $isLoaded={teamsImagesToLoad === 0}
              onLoad={() => setTeamImagesToLoad(teamsImagesToLoad - 1)}
              src={game.homeTeam.imageUrl}
            />
          </Team>
          <Team
            item
            xs={4}
            $isHighlighted={winningTeam === game.awayTeam.id}
            onClick={() => changeWinningTeam(game.awayTeam.id)}
          >
            <TeamName>{game.awayTeam.name}</TeamName>
            <TeamImage
              $isLoaded={teamsImagesToLoad === 0}
              onLoad={() => setTeamImagesToLoad(teamsImagesToLoad - 1)}
              src={game.awayTeam.imageUrl}
            />
          </Team>
        </TeamsWrapper>
        <Slider
          value={winningRange}
          onChange={(event, newvalue) => handleWinningRangeChange(newvalue)}
          valueLabelFormat={rangeValueLable}
          valueLabelDisplay={winningTeam ? "on" : "off"}
          disabled={winningTeam === 0}
          min={0}
          max={MAX_RANGE + 1}
        />
      </div>
    </Card>
  );
}
