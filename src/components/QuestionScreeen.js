import Option from "./Option";

export default function QuestionScreeen({
  dispatch,
  question,
  questionIndex,
  answer,
  isSubmited,
  flag,
  status,
}) {
  // console.log(question);
  // console.log(question.questions[questionIndex].answer);

  const answerIndex = question.questions[questionIndex]?.options.findIndex(
    (option) => option === question.questions[questionIndex].answer
  );

  return (
    <article className="question-screen">
      <div className="left-content">
        <div className="question-wrapper">
          <p className="question-count">
            Question <span className="question-number"> number </span> of{" "}
            <span className="question-total">total</span>
          </p>
          <h2 className="question">
            {question.questions[questionIndex]?.question}
          </h2>
        </div>
        <div className="progress-bar whole">
          <div className="progress-bar done"></div>
        </div>
      </div>
      <div className="choices options">
        {question.questions[questionIndex]?.options.map((option, index) => (
          <Option
            option={option}
            index={index}
            key={option}
            dispatch={dispatch}
            answer={answer}
            isSubmited={isSubmited}
            correctAnswer={question.questions[questionIndex]?.answer}
          />
        ))}

        <button
          className="submit-answer"
          onClick={(e) => {
            e.target.innerHTML === "Submit answer"
              ? dispatch({
                  type: "showAnswer",
                  payload: answer === answerIndex,
                })
              : dispatch({ type: "nextQuestion" });
          }}
        >
          {isSubmited && answer !== null ? "Next Question" : "Submit answer"}
        </button>
        {flag && answer === null && (
          <div className="select-prompt">
            <img src="./assets/images/icon-error.svg" alt="error icon" />
            <p className="select-prompt-text">Please select an answer</p>
          </div>
        )}
      </div>
    </article>
  );
}
