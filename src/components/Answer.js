import { StyledButton } from "./Button/StyledButton";
import QuestionContext, { actions } from "../context/questionContext";
import { useContext, useState } from "react";

export const Answer = ({ answer, question }) => {
  const [state, dispatch] = useContext(QuestionContext);
  const [isSelected, setIsSelected] = useState(false);
  let variant = "";
  let boton_status = false;
  if (question.status === "answer") {
    if (isSelected || answer.correct) {
      variant = answer.correct ? "correct" : "incorrect";
    } else {
      variant = "";
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
        setIsSelected(true);
        dispatch({
          type: actions.SET_STATUS,
          payload: {
            number: question.number,
            status: "answer",
            status_boton: "false",
          },
        });
      }}
    >
      {answer.description}{" "}
    </StyledButton>
  );
};
