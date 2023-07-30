import { FaMoon, FaSun } from "react-icons/fa";
import React, { useContext, useState } from "react";
import {
  StyledToggleBall,
  StyledToggleCheckbox,
  StyledToggleContainer,
  StyledToggleIcon,
  StyledToggleLabel,
} from "./Toggle/StyledToggle";
import QuestionContext, { actions } from "../context/questionContext";

export const ToggleButton = () => {
  const [state, dispatch] = useContext(QuestionContext);

  return (
    <StyledToggleContainer>
      <StyledToggleCheckbox
        id="toggle"
        checked={state.checkedTheme}
        onChange={(e) => {
          dispatch({
            type: actions.SET_THEME,
          });
        }}
      />
      <StyledToggleLabel
        htmlFor="toggle"
        /*
        onClick={(e) => {
          dispatch({
            type: actions.SET_THEME,
            payload: {},
          });
        }}*/
      >
        <StyledToggleIcon>
          <FaMoon />
        </StyledToggleIcon>
        <StyledToggleIcon>
          <FaSun />
        </StyledToggleIcon>
        <StyledToggleBall checked={state.checkedTheme} />
      </StyledToggleLabel>
    </StyledToggleContainer>
  );
};
