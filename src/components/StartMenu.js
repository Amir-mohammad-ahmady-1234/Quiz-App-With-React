import QuizStarterBtn from "./QuizStarterBtn";

export default function StartMenu({ dispatch, questions }) {
  return (
    <article className="start-menu">
      <div className="left-content">
        <h1>
          Welcome to the <span className="bolded">Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>

      <div className="choices">
        {questions.map((quiz) => (
          <QuizStarterBtn key={quiz.title} dispatch={dispatch} quiz={quiz} />
        ))}
        {/* <button
          id="HTML"
          className="quiz-type"
          onClick={(e) =>
            dispatch({ type: "quizSelected", payload: e.target.id })
          }
        >
          <div className="button-icon-container">
            <img src="./assets/images/icon-html.svg" alt="html icon" />
          </div>
          HTML
        </button>
        <button
          id="CSS"
          className="quiz-type"
          onClick={(e) =>
            dispatch({ type: "quizSelected", payload: e.target.id })
          }
        >
          <div className="button-icon-container">
            <img src="./assets/images/icon-css.svg" alt="css icon" />
          </div>
          CSS
        </button>
        <button
          id="JavaScript"
          className="quiz-type"
          onClick={(e) =>
            dispatch({ type: "quizSelected", payload: e.target.id })
          }
        >
          <div className="button-icon-container">
            <img src="./assets/images/icon-js.svg" alt="javascript icon" />
          </div>
          JavaScript
        </button>
        <button
          id="Accessibility"
          className="quiz-type"
          onClick={(e) =>
            dispatch({ type: "quizSelected", payload: e.target.id })
          }
        >
          <div className="button-icon-container">
            <img
              src="./assets/images/icon-accessibility.svg"
              alt="Accessibility icon"
            />
          </div>
          Accessibility
        </button> */}
      </div>
    </article>
  );
}
