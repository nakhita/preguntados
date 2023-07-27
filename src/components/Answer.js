import { StyledButton } from "./Button/StyledButton";
import QuestionContext, { actions } from "../context/questionContext";
import { useContext } from "react";

export const Answer = ({ answer, question }) => {
  const [state, dispatch] = useContext(QuestionContext);
  let variant = "";
  if (question.status === "answer") {
    variant = answer.correct ? "correct" : "incorrect";
  }
  return (
    <StyledButton
      variant={variant}
      onClick={(e) => {
        dispatch({
          type: actions.SET_STATUS,
          payload: { number: question.number, status: "answer" },
        });
      }}
    >
      {answer.description}{" "}
    </StyledButton>
  );
};
