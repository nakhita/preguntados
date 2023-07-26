import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: ${(props) => (props.variant === "subtitle" ? "30px" : "40px")};
  text-align: center;
  justify-content: center;
`;
