import { Answer } from "./Answer";
import { StyledTitle } from "./Title/StyledTitle";

export const Question = ({ question }) => {
  return (
    <>
      <StyledTitle variant="subtitle">{question.title}</StyledTitle>
      {question.answers.map((answer) => {
        return (
          <Answer key={answer.option} answer={answer} question={question} />
        );
      })}
    </>
  );
};
