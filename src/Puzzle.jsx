function Puzzle({ onSolved }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-pink-700 mb-4">Solve this puzzle!</h1>
      <button
        onClick={onSolved}
        className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        Simulate Puzzle Complete
      </button>
    </div>
  );
}

export default Puzzle;
