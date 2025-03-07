export default function StartMenu() {
  return (
    <article className="start-menu">
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
  );
}
