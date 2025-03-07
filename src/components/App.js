function App() {
  return (
    <main>
        <Header />
        <StartMenu />
        <QuestionScreeen />
        <QuizComplete />
    </main>
  );
}

export default App;



function Header () {
return<article className="row-top">
        <div className="curr-subject">
          <div className="button-icon-container">
            <img
              className="subject-img"
              src="./assets/images/icon-css.svg"
              alt="subject icon"
            />
          </div>
          <h2 className="subject-chosen">some Subject</h2>
        </div>
        <div className="light-dark-toggle">
          <div className="sun-container">
            <img src="" alt="picture of sun" />
          </div>
          <label className="light-dark-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
          <div className="moon-container">
            <img src="" alt="picture of moon" />
          </div>
        </div>
      </article>
}

function StartMenu () {
return<article className="start-menu">
        <div className="left-content">
          <h1>
            Welcome to the <span className="bolded">Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
        </div>

        <div className="choices">
          <button id="HTML" className="quiz-type">
            <div className="button-icon-container">
              <img src="./assets/images/icon-html.svg" alt="html icon" />
            </div>
            HTML
          </button>
          <button id="CSS" className="quiz-type">
            <div className="button-icon-container">
              <img src="./assets/images/icon-css.svg" alt="css icon" />
            </div>
            CSS
          </button>
          <button id="JavaScript" className="quiz-type">
            <div className="button-icon-container">
              <img src="./assets/images/icon-js.svg" alt="javascript icon" />
            </div>
            JavaScript
          </button>
          <button id="Accessibility" className="quiz-type">
            <div className="button-icon-container">
              <img
                src="./assets/images/icon-accessibility.svg"
                alt="Accessibility icon"
              />
            </div>
            Accessibility
          </button>
        </div>
      </article>
}

function QuestionScreeen () {
return<article className="question-screen">
        <div className="left-content">
          <div className="question-wrapper">
            <p className="question-count">
              Question <span className="question-number"> number </span>{" "}
              of
              <span className="question-total">total</span>
            </p>
            <h2 className="question">Placeholder</h2>
          </div>
          <div className="progress-bar whole">
            <div className="progress-bar done"></div>
          </div>
        </div>
        <div className="choices options">
          <button id="A" className="option">
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
          </button>

          <button className="submit-answer">Submit answer</button>
          <div className="select-prompt">
            <img src="./assets/images/icon-error.svg" alt="error icon" />
            <p className="select-prompt-text">Please select an answer</p>
          </div>
        </div>
      </article>
}

function QuizComplete () {
return<article className="quiz-complete">
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
}
