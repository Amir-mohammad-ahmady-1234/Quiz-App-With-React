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
  flag: false,
  highestScore: 0,
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
          !state.isSubmited || state.answer === null
            ? action.payload
            : state.answer,
      };
    case "showAnswer":
      console.log(action.payload)
      return {
        ...state,
        isSubmited: state.answer !== null ? true : false,
        correctAnswerNum: action.payload
          ? state.correctAnswerNum+1
          : state.correctAnswerNum,
        flag: state.answer === null ? true : false,
      };
    case "nextQuestion":
      const questionsLength =
        state.questions.quizzes[state.index].questions.length;

      const isActive = state.questionIndex < questionsLength - 1;

      return isActive
        ? {
            ...state,
            questionIndex: state.questionIndex + 1,
            answer: null,
            isSubmited: false,
            flag: false,
          }
        : {
            ...state,
            status: "finished",
            highestScore:
              state.correctAnswerNum > state.highestScore
                ? state.correctAnswerNum
                : state.highestScore,
          };
    case "reset":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
        highestScore: state.highestScore,
      };
    default:
      throw new Error("unknown");
  }
}

function App() {
  // const flag = useRef(false);

  const [
    {
      questions,
      status,
      index,
      questionIndex,
      answer,
      isSubmited,
      correctAnswerNum,
      flag,
      highestScore,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      console.log(correctAnswerNum);
    },
    [correctAnswerNum]
  );

  useEffect(function () {
    fetch("../data/data.json")
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
          flag={flag}
          status={status}
        />
      )}
      {status === "finished" && (
        <QuizComplete
          questions={questions}
          index={index}
          correctAnswerNum={correctAnswerNum}
          dispatch={dispatch}
          highestScore={highestScore}
        />
      )}
    </main>
  );
}

export default App;
