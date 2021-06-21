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

interface IUser {
  firstName: string;
  lastName: string;
  imageUrl: string;
}

interface ILeague {
  name: string;
  userPlace: number;
  count: number;
}
