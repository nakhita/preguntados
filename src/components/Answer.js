import { StyledButton } from "./Button/StyledButton";
import QuestionContext, { actions } from "../context/questionContext";
import { useContext, useState } from "react";

export const Answer = ({ answer, question }) => {
  const [state, dispatch] = useContext(QuestionContext);
  let variant = "default";
  let boton_status = false;
  if (question.status === "answer") {
    if (state.selectedOption == answer.option || answer.correct) {
      variant = answer.correct ? "correct" : "incorrect";
    } else {
      variant = "default";
    }
  }
  if (question.status_boton === "false") {
    boton_status = true;
  }
  return (
    <StyledButton
      variant={variant}
      disabled={boton_status}
      onClick={(e) => {
        dispatch({
          type: actions.SET_STATUS,
          payload: {
            number: question.number,
            status: "answer",
            status_boton: "false",
            selectedOption: answer.option,
          },
        });
      }}
    >
      {answer.description}{" "}
    </StyledButton>
  );
};
