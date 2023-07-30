import { produce } from "immer";
import { useReducer, createContext } from "react";
import { FaIgloo } from "react-icons/fa";
import { light, dark } from "../utils/theme";

const QuestionContext = createContext({});

const actions = {
  SET_QUESTIONS: "set-questions",
  SET_STATUS: "set-status",
  SET_NEXT_QUESTION: "set-next-question",
  RESET_STATE: "reset-state",
  SET_THEME: "set-theme",
};

const initialState = {
  questions: [],
  actualQuestionIndex: 0,
  selectedOption: 0,
  score: 0,
  actualTheme: light,
  checkedTheme: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_QUESTIONS: {
      const newData = action.payload.map((item) => ({
        ...item,
        status: "question",
      }));
      state.questions = newData;

      return;
    }
    case actions.SET_STATUS: {
      const question = state.questions.find(
        (element) => element.number === action.payload.number
      );

      if (question) {
        question.status = action.payload.status;
        question.status_boton = action.payload.status_boton;
        state.selectedOption = action.payload.selectedOption;
        const answer = question.answers.find(
          (element) => element.option === action.payload.selectedOption
        );
        if (answer.correct) {
          state.score = state.score + 10;
        }
      }
      return;
    }
    case actions.SET_NEXT_QUESTION:
      state.actualQuestionIndex = state.actualQuestionIndex + 1;
      return;

    case actions.RESET_STATE:
      state.actualQuestionIndex = 0;
      state.score = 0;
      state.selectedOption = 0;
      const questions = state.questions.map((item) => ({
        ...item,
        status: "question",
        status_boton: "true",
      }));
      state.questions = questions;
      return;
    case actions.SET_THEME:
      state.checkedTheme = !state.checkedTheme;
      state.actualTheme = state.checkedTheme ? dark : light;
      console.log(state.actualTheme);
      return;
    default:
      return;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(produce(reducer), initialState);

  return (
    <QuestionContext.Provider value={[state, dispatch]}>
      {children}
    </QuestionContext.Provider>
  );
};

export { Provider, actions };
export default QuestionContext;
