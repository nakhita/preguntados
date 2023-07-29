import { keyframes, styled } from "styled-components";

const animacion = keyframes`
    to {
      font-size: 15px;
      width: 80%;
    }
  `;
export const StyledButton = styled.button`
  width: 85%;
  border: 2px solid ${({ theme }) => theme.letra.color.default};
  border-radius: 10px;
  color: ${({ theme }) => theme.letra.color.default};
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
  cursor: ${(props) => (props.disabled === false ? "pointer" : "not-allowed")};
  background-color: ${({ variant, theme }) =>
    theme.button.pregunta.color[variant]};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  margin: 15px;

  &:hover {
    background-color: ${(props) =>
      props.variant === "correct"
        ? "rgba(0, 255, 0, 0.5)"
        : props.variant === "incorrect"
        ? "rgba(255, 0, 0, 0.5)"
        : "rgba(159, 163, 169, 1)"};
  }
  &:active {
    animation-direction: reverse;
    animation: ${animacion} 0.3s;
  }
`;
