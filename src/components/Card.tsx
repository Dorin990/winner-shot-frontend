import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5% 5% 0 5%;
  margin: 5%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

interface Props {
  children: JSX.Element;
}
export default function Card({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
