import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import LeaguePlace from "../components/LeaguePlace";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

const league: ILeague = {
  name: "טרגרליג",
  userPlace: 4,
  count: 27,
  users: [
    {
      id: 1,
      firstName: "אופיר",
      lastName: "רבי",
      imageUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5OQ4d6jHTjKyiWS7F_dTcKEVAN3UA0eoU2RxenJA=s83-c-mo",
      bulls: 1,
      corrects: 1,
      wrongs: 1,
      points: 4,
    },
    {
      id: 2,
      firstName: "דורין",
      lastName: "לב",
      imageUrl: "",
      bulls: 0,
      corrects: 2,
      wrongs: 1,
      points: 2,
    },
  ],
};

const TableHeader = styled(Grid)`
  padding: 0 5% 0 5%;

  div {
    text-align: center;
  }
`;

const BoldColumn = styled.div`
  font-weight: bold;
`;

const PageHeader = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
`;

export default function League() {
  const { leagueName } = useParams<{ leagueName: string }>();
  const [currentLeague, setCurrentLeague] = useState<ILeague>();

  useEffect(() => {
    setCurrentLeague(league);
  }, [leagueName]);

  return (
    <>
      <PageHeader>
        <Title>{leagueName}</Title>
        <TableHeader container justify="flex-end">
          <Grid item xs={2}>
            בול
          </Grid>
          <Grid item xs={2}>
            כיוון
          </Grid>
          <Grid item xs={2}>
            טעות
          </Grid>
          <Grid item xs={3}>
            <BoldColumn>ניקוד</BoldColumn>
          </Grid>
        </TableHeader>
      </PageHeader>
      {currentLeague?.users?.map((user, i) => (
        <LeaguePlace key={user.id} user={user} place={i} />
      ))}
    </>
  );
}
