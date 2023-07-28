import { keyframes, styled } from "styled-components";

const animacion = keyframes`
    to {
      font-size: 15px;
      width: 80%;
    }
  `;
export const StyledButton = styled.button`
  width: 85%;
  border: 2px solid;
  border-radius: 10px;
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
  cursor: ${(props) => (props.disabled === false ? "pointer" : "not-allowed")};
  background-color: ${(props) =>
    props.variant === "correct"
      ? "#84c3c8"
      : props.variant === "incorrect"
      ? "#f8d9d6"
      : "#f4f4e1"};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  margin: 15px;

  &:hover {
    background-color: ${(props) =>
      props.variant === "correct"
        ? "rgba(0, 255, 0, 0.5)"
        : props.variant === "incorrect"
        ? "rgba(255, 0, 0, 0.5)"
        : "aliceblue"};
  }
  &:active {
    animation-direction: reverse;
    animation: ${animacion} 0.3s;
  }
`;
