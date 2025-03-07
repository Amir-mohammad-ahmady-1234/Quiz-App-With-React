export default function QuizComplete() {
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
                src="./assets/images/icon-css.svg"
                alt="subject icon"
              />
            </div>
            <h2 className="subject-chosen">some Subject</h2>
          </div>
          <h1 className="final-score">{/* score */}</h1>
          <p className="score-out-of">
            out of <span className="complete-question-total">totalQ</span>
          </p>
        </div>
        <button className="restart">Play Again</button>
      </div>
    </article>
  );
}
