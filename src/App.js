import "./App.css";
import QuestionPanel from "./components/QuestionPanel";
import { Provider } from "./context/questionContext";

function App() {
  return (
    <Provider>
      <QuestionPanel></QuestionPanel>
    </Provider>
  );
}

export default App;
