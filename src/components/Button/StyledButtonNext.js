import { keyframes, styled } from "styled-components";

const animacion = keyframes`
    to {
      width: 9%;
    }
  `;
export const StyledButtonNext = styled.button`
  width: 10%;
  border: 2px solid ${({ theme }) => theme.letra.color.default};
  border-radius: 10px;
  color: ${({ theme }) => theme.letra.color.default};
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  margin: 15px;
  margin-left: auto;
  background-color: ${({ theme }) => theme.button.next.color.default};

  &:hover {
    background-color: rgba(159, 163, 169, 1);
  }
  &:active {
    animation-direction: reverse;
    animation: ${animacion} 0.3s;
  }
`;
