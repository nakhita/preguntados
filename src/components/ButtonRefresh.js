import { useContext } from "react";
import { StyledButtonRefresh } from "./Button/StyledButtonRefresh";
import { GrRefresh } from "react-icons/gr";
import QuestionContext, { actions } from "../context/questionContext";
export const ButtonRefresh = () => {
  const [state, dispatch] = useContext(QuestionContext);
  return (
    <StyledButtonRefresh
      onClick={(e) => {
        dispatch({
          type: actions.RESET_STATE,
          payload: {},
        });
      }}
    >
      <GrRefresh></GrRefresh>
    </StyledButtonRefresh>
  );
};
