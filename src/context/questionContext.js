import { produce } from "immer";
import { useReducer, createContext } from "react";

const QuestionContext = createContext({});

const actions = {
  SET_QUESTIONS: "set-questions",
};

const initialState = {
  questions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_QUESTIONS: {
      state.questions = action.payload;
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
