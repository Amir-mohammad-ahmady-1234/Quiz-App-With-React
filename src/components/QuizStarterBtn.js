function QuizStarterBtn({dispatch, quiz}) {
    return (
        <button
          id={quiz.title}
          className="quiz-type"
          onClick={(e) =>
            dispatch({ type: "quizSelected", payload: e.target.id })
          }
        >
          <div className="button-icon-container">
            <img src={quiz.icon} alt={`${quiz.title} icon`} />
          </div>
          {quiz.title}
        </button>
    )
}

export default QuizStarterBtn
