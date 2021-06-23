import SingleGame from "../components/SingleGame";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { useEffect } from "react";
import { setAvailableGames } from "../state/games";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

const games: IGame[] = [
  {
    id: 1,
    homeTeam: {
      id: 1,
      name: "הפועל חולון",
      imageUrl:
        "http://www.basket.co.il/pics/2018/HH%20LOGO%202018-19_TIGER.png",
    },
    awayTeam: {
      id: 2,
      name: "מכבי תל אביב",
      imageUrl: "http://www.basket.co.il/pics/2007/logos/logo_maccabi.png",
    },
  },
  {
    id: 2,
    homeTeam: {
      id: 3,
      name: "הפועל ירושלים",
      imageUrl: "http://www.basket.co.il/pics/2007/logos/logo_yam.png",
    },
    awayTeam: {
      id: 4,
      name: "הפועל תל אביב",
      imageUrl: "http://www.basket.co.il/pics/2007/logos/logo_hapoelta.png",
    },
  },
  {
    id: 3,
    homeTeam: {
      id: 5,
      name: "מכבי ראשון לציון",
      imageUrl: "http://www.basket.co.il/pics/2007/logos/logo_rishon.png",
    },
    awayTeam: {
      id: 6,
      name: "בני הרצליה",
      imageUrl:
        "http://www.basket.co.il/pics/_teams/herzlia/logo_hertzeliya.png",
    },
  },
];

export default function Play() {
  const dispatch = useAppDispatch();
  const availableGames = useAppSelector((state) => state.games.availableGames);

  const singleGames = availableGames.map((game) => (
    <SingleGame key={game.id} game={game} />
  ));

  useEffect(() => {
    dispatch(setAvailableGames(games));
  }, [dispatch]);

  return (
    <div>
      <Title>המשחקים שזמינים בשבילך</Title>
      <SubTitle>הבחירות שלך נשמרות באופן אוטומטי</SubTitle>
      {singleGames}
    </div>
  );
}
