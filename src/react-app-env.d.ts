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
}

interface ILeague {
  name: string;
  userPlace: number;
  count: number;
}

interface IUserChoice {
  userId: number;
  gameId: number;
  winnerTeamId: number;
  lowRange: number;
  highRange: number;
  isCorrect: boolean;
}
