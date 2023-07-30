import React, { useEffect, useContext, useRef } from "react";
import { StyledTimer } from "./Timer/StyledTimer";
import QuestionContext, { actions } from "../context/questionContext";

const CountdownTimer = () => {
  const [state, dispatch] = useContext(QuestionContext);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (state.questions[state.actualQuestionIndex].status === "question") {
      if (state.timer > 0 && !timerIdRef.current) {
        // Inicia el contador solo si hay tiempo restante y no hay un timerId existente.
        timerIdRef.current = setInterval(() => {
          dispatch({ type: actions.SET_TIMER });
        }, 1000);
      } else if (state.timer === 0 && timerIdRef.current) {
        // Si el contador llega a cero y hay un timerId, detiene el contador y limpia el intervalo.
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
        dispatch({
          type: actions.SET_STATUS_ACTUAL_QUESTION,
          payload: {
            status: "answer",
            status_boton: "false",
            selectedOption: 0,
          },
        });
      }
    }
  }, [state.timer, dispatch, state.actualQuestionIndex, state.questions]);

  useEffect(() => {
    // Detiene el contador cuando se selecciona una respuesta.
    if (state.selectedOption !== 0 && timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, [state.selectedOption]);

  useEffect(() => {
    // Limpia el intervalo cuando el componente se desmonta.
    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
    };
  }, []);

  const calculateProgress = () => {
    return (state.timer / state.timerInicial) * 100;
  };

  return (
    <StyledTimer progress={calculateProgress()}>
      <div className="progress-bar" />
    </StyledTimer>
  );
};

export default CountdownTimer;
