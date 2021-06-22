import { useAppSelector, useAppDispatch } from "../state/hooks";
import LeagueCard from "../components/LeagueCard";
import { useEffect } from "react";
import { setLeagues } from "../state/leagues";
import AddLeagueButton from "../components/AddLeagueButton";

export default function Leagues() {
  const dispatch = useAppDispatch();
  const leagues = useAppSelector((state) => state.leagues.leagues);

  useEffect(() => {
    dispatch(
      setLeagues([
        { name: "טרגרליג", userPlace: 4, count: 27 },
        { name: "איה נאפה", userPlace: 1, count: 5 },
        { name: "ליגת ווינר", userPlace: 100, count: 100 },
        { name: "ליגה", userPlace: 3, count: 11 },
      ])
    );
  }, [dispatch]);

  return (
    <>
      {leagues.map((league) => (
        <LeagueCard key={league.name} league={league} />
      ))}
      <AddLeagueButton />
    </>
  );
}
