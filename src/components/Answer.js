import { StyledButton } from "./Button/StyledButton";

export const Answer = ({ answer }) => {
  return <StyledButton>{answer.description}</StyledButton>;
};
