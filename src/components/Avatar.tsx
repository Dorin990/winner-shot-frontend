import { Avatar } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 50vw;
    height: 50vw;
    font-size: 20vw;
  }
`;

interface Props {
  imageUrl?: string;
  firstLetter: string;
}
export default function CustomAvatar({ imageUrl, firstLetter }: Props) {
  return (
    <Wrapper>
      <StyledAvatar src={imageUrl}>
        {!imageUrl && !!firstLetter && firstLetter.toUpperCase()}
      </StyledAvatar>
    </Wrapper>
  );
}
