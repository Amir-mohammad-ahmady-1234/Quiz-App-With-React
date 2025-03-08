import { useEffect, useReducer } from "react";

import Header from "./Header";
import QuestionScreeen from "./QuestionScreeen";
import QuizComplete from "./QuizComplete";
import StartMenu from "./StartMenu";
import Loader from "./Loader";
import Error from "./Error";

const initialState = {
  questions: [],
  // status : fetching, faildFind, ready, active, finished
  status: "fetching",
  index: null,
  questionIndex: null,
  answer: null,
  isSubmited: false,
  correctAnswerNum: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "error":
      return { ...state, status: "faildFind" };
    case "dataFetched":
      return { ...state, status: "ready", questions: action.payload };
    case "quizSelected":
      const quizSelectedIndex = state.questions.quizzes.findIndex(
        (quiz) => quiz.title === action.payload
      );
      return {
        ...state,
        status: "active",
        index: quizSelectedIndex,
        questionIndex: 0,
      };
    case "selectAnswer":
      return {
        ...state,
        answer:
          !state.isSubmited || !state.answer ? action.payload : state.answer,
      };
    case "showAnswer":
      return {
        ...state,
        isSubmited: state.answer ? true : false,
        correctAnswerNum: action.payload
          ? state.correctAnswerNum++
          : state.correctAnswerNum,
      };
    default:
      throw new Error("unknown");
  }
}

function App() {
  const [
    {
      questions,
      status,
      index,
      questionIndex,
      answer,
      isSubmited,
      correctAnswerNum,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataFetched", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <main>
      <Header questions={questions} status={status} index={index} />
      {status === "faildFind" && <Error />}
      {status === "fetching" && <Loader />}
      {status === "ready" && (
        <StartMenu dispatch={dispatch} questions={questions.quizzes} />
      )}
      {status === "active" && (
        <QuestionScreeen
          dispatch={dispatch}
          question={questions.quizzes[index]}
          questionIndex={questionIndex}
          answer={answer}
          isSubmited={isSubmited}
        />
      )}
      {status === "finished" && <QuizComplete />}
    </main>
  );
}

export default App;
