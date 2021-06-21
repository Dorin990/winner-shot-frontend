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
  }
`;

interface Props {
  imageUrl: string;
}
export default function CustomAvatar({ imageUrl }: Props) {
  return (
    <Wrapper>
      <StyledAvatar src={imageUrl} />
    </Wrapper>
  );
}
