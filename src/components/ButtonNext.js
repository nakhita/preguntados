import { useContext } from "react";
import { StyledButtonNext } from "./Button/StyledButtonNext";
import { GrNext, GrRefresh } from "react-icons/gr";
import QuestionContext, { actions } from "../context/questionContext";
export const ButtonNext = () => {
  const [state, dispatch] = useContext(QuestionContext);
  return (
    <StyledButtonNext
      onClick={(e) => {
        dispatch({
          type: actions.SET_NEXT_QUESTION,
          payload: {},
        });
      }}
    >
      <GrNext></GrNext>
    </StyledButtonNext>
  );
};
