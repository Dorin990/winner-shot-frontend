import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";

const TeamsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding: 10%;
`;

const Team = styled.div``;

const MAX_RANGE = 25;
const MIN_RANGE = -25;

interface Props {
  game: IGame;
}
export default function SingleGame({ game }: Props) {
  // Positive for home team, negative for away team
  const [winningRange, setWinningRange] = useState([0, 0]);

  const handleWinningRangeChange = (newValue: any) => {
    console.log(newValue);

    // if (newValue[0] === MAX_RANGE && )

    if (newValue[0] !== winningRange[0] && newValue[0] >= MIN_RANGE) {
      newValue[1] = newValue[0] + 5;
    } else if (newValue[1] !== winningRange[1] && newValue[1] <= MAX_RANGE) {
      newValue[0] = newValue[1] - 5;
    }

    if (newValue[0] < MIN_RANGE) {
      newValue[1] = newValue[0];
    } else if (newValue[1] > MAX_RANGE) {
      newValue[0] = newValue[1];
    }

    setWinningRange(newValue);
  };

  const rangeValueLable = (value: number) => {
    if (value > MAX_RANGE || value < MIN_RANGE) {
      return `${MAX_RANGE + 1}+`;
    }

    return Math.abs(value);
  };

  return (
    <Wrapper>
      <TeamsWrapper>
        <Team>{game.homeTeam}</Team>
        <Team>{game.awayTeam}</Team>
      </TeamsWrapper>
      <Slider
        value={winningRange}
        onChange={(event, newvalue) => handleWinningRangeChange(newvalue)}
        valueLabelFormat={rangeValueLable}
        valueLabelDisplay={
          winningRange[0] === 0 && winningRange[1] === 0 ? "off" : "on"
        }
        min={MIN_RANGE - 1}
        max={MAX_RANGE + 1}
      />
    </Wrapper>
  );
}
