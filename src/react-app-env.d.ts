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
  userChoise?: IUserChoice;
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  bulls?: number;
  corrects?: number;
  wrongs?: number;
  points?: number;
}

interface ILeague {
  name: string;
  userPlace: number;
  count: number;
  users?: IUser[];
}

interface IUserChoice {
  userId: number;
  gameId: number;
  winnerTeamId: number;
  lowRange: number;
  highRange: number;
  state: number;
}
