import SingleGame from "../components/SingleGame";

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
];

export default function Play() {
  const singleGames = games.map((game) => (
    <SingleGame key={game.id} game={game} />
  ));

  return <>{singleGames}</>;
}
