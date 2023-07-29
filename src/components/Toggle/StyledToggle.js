import { styled } from "styled-components";

export const StyledToggleCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  position: absolute;
  &:checked {
    transform: translateX(24px);
  }
`;

export const StyledToggleLabel = styled.label`
  background-color: #111;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledToggleIcon = styled.span`
  color: #f1c40f;
`;

export const StyledToggleBall = styled.span`
  background-color: #fff;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  ${({ checked }) => checked && "transform: translateX(24px);"}
`;

export const StyledToggleContainer = styled.div``;
