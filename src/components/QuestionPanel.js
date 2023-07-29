import React, { useContext, useEffect } from "react";
import { StyledTitle } from "./Title/StyledTitle";
import { ButtonNext } from "./ButtonNext";
import { ButtonRefresh } from "./ButtonRefresh";
import { StyledPanel, StyledPanelContainer } from "./Panel/StyledPanel";
import QuestionContext, { actions } from "../context/questionContext";
import { Question } from "./Question";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "../utils/theme";
import { ToggleButton } from "./ToggleButton";

const QuestionsPanel = () => {
  const [state, dispatch] = useContext(QuestionContext);
  const puntaje = 0;
  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actions.SET_QUESTIONS, payload: data.questions });
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledPanelContainer>
        <ToggleButton></ToggleButton>
        <StyledTitle>Preguntas y respuestas</StyledTitle>
        <StyledTitle variant="subtitle">Puntaje : {state.score}</StyledTitle>
        {state.questions.length > 0 ? (
          <StyledPanel>
            <Question
              question={state.questions[state.actualQuestionIndex]}
            ></Question>
            {state.questions[state.actualQuestionIndex].status === "answer" &&
              (state.questions.length - 1 == state.actualQuestionIndex ? (
                <ButtonRefresh></ButtonRefresh>
              ) : (
                <ButtonNext></ButtonNext>
              ))}
          </StyledPanel>
        ) : (
          "No hay preguntas"
        )}
      </StyledPanelContainer>
    </ThemeProvider>
  );
};

export default QuestionsPanel;
