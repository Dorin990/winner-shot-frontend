import Avatar from "../components/Avatar";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { useAppSelector } from "../state/hooks";
import { useEffect, useState } from "react";
import SingleGame from "../components/SingleGame";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.div`
  margin: 5%;
`;
const Signout = styled(Button)`
  &.MuiButton-contained {
    background-color: red;
    color: white;
  }
`;

const Name = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 150%;
`;

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
    userChoise: {
      gameId: 1,
      highRange: 7,
      lowRange: 3,
      state: 2,
      userId: 1,
      winnerTeamId: 1,
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
    userChoise: {
      gameId: 2,
      highRange: 13,
      lowRange: 9,
      state: 1,
      userId: 1,
      winnerTeamId: 4,
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
    userChoise: {
      gameId: 3,
      highRange: 4,
      lowRange: 0,
      state: 0,
      userId: 1,
      winnerTeamId: 5,
    },
  },
];

export default function Settings() {
  const { userId } = useParams<{ userId: string | undefined }>();
  const [completedGames, setCompletedGames] = useState<IGame[]>([]);
  const [shownName, setShownName] = useState("");
  const [shownImageUrl, setShownImageUrl] = useState("");
  const { name, imageUrl } = useAppSelector((state) => state.user);
  const { logout } = useAuth0();

  const onLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    // Show connected user
    if (!userId) {
      setShownName(name);
      setShownImageUrl(imageUrl);
      setCompletedGames(games);
    } else {
      // Show chosen user
      setShownName("שם מהשרת");
      setShownImageUrl("");
      setCompletedGames([]);
    }
  }, [name, imageUrl, userId]);

  return (
    <Wrapper>
      <Avatar imageUrl={shownImageUrl} firstLetter={shownName[0]} />
      <Name>{shownName}</Name>
      {!userId && (
        <Signout fullWidth variant="contained" onClick={onLogout}>
          התנתק
        </Signout>
      )}
      {completedGames.map((game) => (
        <SingleGame key={game.id} game={game} />
      ))}
    </Wrapper>
  );
}
