import React, { useContext, useEffect } from "react";
import { StyledTitle } from "./Title/StyledTitle";
import { StyledPanel, StyledPanelContainer } from "./Panel/StyledPanel";
import QuestionContext, { actions } from "../context/questionContext";
import { Question } from "./Question";

const QuestionsPanel = () => {
  const [state, dispatch] = useContext(QuestionContext);

  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actions.SET_QUESTIONS, payload: data.questions });
      });
  }, []);

  return (
    <StyledPanelContainer>
      <StyledTitle>Preguntas y respuestas</StyledTitle>
      {state.questions.length > 0 ? (
        <StyledPanel>
          <Question question={state.questions[0]}></Question>
        </StyledPanel>
      ) : (
        "No hay preguntas"
      )}
    </StyledPanelContainer>
  );
};

export default QuestionsPanel;
