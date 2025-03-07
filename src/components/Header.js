export default function Header() {
  return (
    <article className="row-top">
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
