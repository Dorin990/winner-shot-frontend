/// <reference types="react-scripts" />
interface ITeam {
  id: number;
  name: string;
  imageUrl: string;
}

interface IGame {
  id: number;
  homeTeam: ITeam;
  awayTeam: ITeam;
}
