export default function Header({ questions, status, index }) {
  return (
    <article className="row-top">
      <div className="curr-subject">
        {(status === "active" || status === "finished") && (
          <>
            <div className="button-icon-container">
              <img
                className="subject-img"
                src={questions.quizzes[index]?.icon}
                alt="subject icon"
              />
            </div>
            <h2 className="subject-chosen">{questions.quizzes[index]?.title}</h2>
          </>
        )}
      </div>
      <div className="light-dark-toggle">
        <div className="sun-container">
          <img src="#" alt="picture of sun" />
        </div>
        <label className="light-dark-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        <div className="moon-container">
          <img src="#" alt="picture of moon" />
        </div>
      </div>
    </article>
  );
}
