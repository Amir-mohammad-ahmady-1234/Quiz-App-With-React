export default function QuizComplete({
  questions,
  index,
  correctAnswerNum,
  dispatch,
}) {
  return (
    <article className="quiz-complete">
      <div className="complete-left">
        <h1>
          Quiz completed
          <span className="scored">You scored...</span>
        </h1>
      </div>

      <div className="complete-right">
        <div className="score-container">
          <div className="final curr-subject">
            <div className="button-icon-container">
              <img
                className="subject-img"
                src={questions.quizzes[index]?.icon}
                alt="subject icon"
              />
            </div>
            <h2 className="subject-chosen">
              {questions.quizzes[index]?.title}
            </h2>
          </div>
          <h1 className="final-score">{correctAnswerNum}</h1>
          <p className="score-out-of">
            out of{" "}
            <span className="complete-question-total">
              {questions.quizzes[index].questions.length}
            </span>
          </p>
        </div>
        <button className="restart" onClick={() => dispatch({ type: "reset" })}>
          Play Again
        </button>
      </div>
    </article>
  );
}
