import { styled } from "styled-components";

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-height: 400px;
  border: 2px solid;
  background-color: ${({ theme }) => theme.panel.color.default};
`;

export const StyledPanelContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.fondo.color.default};
`;
