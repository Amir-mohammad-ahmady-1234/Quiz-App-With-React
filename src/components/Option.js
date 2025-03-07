function Option({ option, index }) {
  const id = index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D";
  return (
    <button id={id} className="option">
      <div className="option-box">{id}</div>
      {option}
    </button>
  );
}

export default Option;
