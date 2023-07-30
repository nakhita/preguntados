import { styled } from "styled-components";

export const StyledTimer = styled.div`
  width: 100%;
  padding-bottom: 10px;

  .progress-bar {
    height: 20px;
    background-color: ${({ theme }) => theme.timer.color.default};
    width: ${({ progress }) => `${progress}%`};
  }
`;
