import Option from "./Option";

export default function QuestionScreeen({ dispatch, question, questionIndex }) {
  console.log(question);
  return (
    <article className="question-screen">
      <div className="left-content">
        <div className="question-wrapper">
          <p className="question-count">
            Question <span className="question-number"> number </span> of{" "}
            <span className="question-total">total</span>
          </p>
          <h2 className="question">
            {question.questions[questionIndex].question}
          </h2>
        </div>
        <div className="progress-bar whole">
          <div className="progress-bar done"></div>
        </div>
      </div>
      <div className="choices options">
        {question.questions[questionIndex].options.map((option, index) => (
          <Option option={option} index={index} key={option} />
        ))}
        {/* <button id="A" className="option">
          <div className="option-box">A</div>
        </button>
        <button id="B" className="option">
          <div className="option-box">B</div>
        </button>
        <button id="C" className="option">
          <div className="option-box">C</div>
        </button>
        <button id="D" className="option">
          <div className="option-box">D</div>
        </button> */}

        <button className="submit-answer">Submit answer</button>
        <div className="select-prompt">
          <img src="./assets/images/icon-error.svg" alt="error icon" />
          <p className="select-prompt-text">Please select an answer</p>
        </div>
      </div>
    </article>
  );
}
