import SingleGame from "../components/SingleGame";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { useEffect } from "react";
import { setAvailableGames } from "../state/games";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { useSecureFetch } from "../utils/hooks";

export default function Play() {
  const dispatch = useAppDispatch();
  const availableGames = useAppSelector((state) => state.games.availableGames);
  const getCurrentGames = useSecureFetch("games", "GET");

  const singleGames = availableGames.map((game) => (
    <SingleGame key={game.id} game={game} />
  ));

  useEffect(() => {
    (async function () {
      try {
        const games = await getCurrentGames();
        dispatch(setAvailableGames(games));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, getCurrentGames]);

  return (
    <div>
      <Title>המשחקים שזמינים בשבילך</Title>
      <SubTitle>הבחירות שלך נשמרות באופן אוטומטי</SubTitle>
      {singleGames}
    </div>
  );
}
