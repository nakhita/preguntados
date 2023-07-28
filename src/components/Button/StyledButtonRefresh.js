import { keyframes, styled } from "styled-components";

const animacion = keyframes`
    to {
      width: 9%;
    }
  `;
export const StyledButtonRefresh = styled.button`
  width: 10%;
  border: 2px solid;
  border-radius: 10px;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  margin: 15px;
  margin-left: auto;
  background-color: #f999f5;

  &:hover {
    background-color: #ef94eb;
  }
  &:active {
    animation-direction: reverse;
    animation: ${animacion} 0.3s;
  }
`;
