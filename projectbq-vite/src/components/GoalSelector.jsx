const GOALS = ["3:35", "3:30", "3:25"];

export default function GoalSelector({
  goalLabel,
  setGoalLabel,
}) {
  return (
    <section className="goal-selector">
      <div className="control-label">Goal</div>

      <div className="goal-list">
        {GOALS.map((goal) => (
          <button
            key={goal}
            type="button"
            onClick={() => setGoalLabel(goal)}
            className={`pill-button ${
              goalLabel === goal ? "active" : ""
            }`}
          >
            {goal}
          </button>
        ))}
      </div>
    </section>
  );
}