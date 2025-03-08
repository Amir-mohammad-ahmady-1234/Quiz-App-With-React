function Option({
  option,
  index,
  dispatch,
  answer,
  isSubmited,
  correctAnswer,
  question,
}) {
  const id = index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D";
  const isCorrect = option === correctAnswer;

  return (
    <button
      id={id}
      className={`option ${answer === index && !isSubmited && "selected"} ${
        isSubmited && answer !== null && (isCorrect ? "correct" : "invalid")
      }`}
      onClick={() =>
        dispatch({
          type: "selectAnswer",
          payload: index,
        })
      }
    >
      <div
        className={`option-box ${
          answer === index && !isSubmited && "selected-box"
        } ${
          isSubmited &&
          answer !== null &&
          (isCorrect ? "correct-box" : "invalid-box")
        }`}
      >
        {id}
      </div>
      {option}
    </button>
  );
}

export default Option;
