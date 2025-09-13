function Child({ count, onIncrementCount }) {
  return (
    <div>
      <h2>Count in Child: {count}</h2>
      <button
        className="bg-teal-500 text-white p-1 rounded-sm"
        onClick={onIncrementCount}
      >
        Change Count(Child)
      </button>
    </div>
  );
}

export default Child;
