import { produce } from "immer";
import { useReducer, createContext } from "react";

const QuestionContext = createContext({});

const actions = {
  SET_QUESTIONS: "set-questions",
  SET_STATUS: "set-status",
  GET_STATUS: "get-status",
};

const initialState = {
  questions: [],
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
      }
      return;
    }
    case actions.GET_STATUS: {
      const question = state.questions.find(
        (element) => element.number === action.payload.number
      );
      if (question) {
        return question.status;
      }
      return;
    }
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
