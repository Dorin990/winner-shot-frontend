import SingleGame from "../components/SingleGame";

const games: IGame[] = [
  { id: 1, homeTeam: "הפועל חולון", awayTeam: "מכבי תל אביב" },
];

export default function Play() {
  const singleGames = games.map((game) => (
    <SingleGame key={game.id} game={game} />
  ));

  return <>{singleGames}</>;
}
