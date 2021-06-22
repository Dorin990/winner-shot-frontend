import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  font-weight: bold;
  font-size: 200%;
  text-align: center;
`;

export default function League() {
  const { leagueName } = useParams<{ leagueName: string }>();
  return (
    <>
      <Title>{leagueName}</Title>
    </>
  );
}
