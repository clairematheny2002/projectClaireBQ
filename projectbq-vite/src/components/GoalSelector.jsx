const GOALS = ["3:35", "3:30", "3:25"];

import { useState, useEffect } from "react";

export default function GoalSelector({
  goalLabel,
  setGoalLabel,
}) {
  const [custom, setCustom] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // keep the custom input in sync when a preset is selected
    if (GOALS.includes(goalLabel)) {
      setCustom("");
      setError("");
    }
  }, [goalLabel]);

  function validateAndSet(value) {
    const v = String(value || "").trim();
    if (!v) return;
    // accept H:MM or HH:MM
    const m = v.match(/^([0-9]{1,2}):([0-9]{2})$/);
    if (!m) {
      setError("Enter time as HH:MM");
      return;
    }
    const hh = Number(m[1]);
    const mm = Number(m[2]);
    if (mm < 0 || mm > 59 || hh < 0) {
      setError("Invalid minutes (00–59)");
      return;
    }
    const normalized = `${hh}:${String(mm).padStart(2, "0")}`;
    setError("");
    setCustom("");
    setGoalLabel(normalized);
  }

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

      <div style={{ marginTop: 8 }}>
        <label style={{ display: "block", fontSize: 12, color: "#666" }}>Custom</label>
        <div style={{ display: "flex", gap: 8, marginTop: 6, justifyContent: "center", alignItems: "center" }}>
          <input
            aria-label="custom goal"
            placeholder="HH:MM"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") validateAndSet(custom);
            }}
            className="text-input"
            style={{ width: 90 }}
          />
          <button type="button" onClick={() => validateAndSet(custom)} className="pill-button">
            Set
          </button>
          <button
            type="button"
            onClick={() => {
              setCustom("");
              setError("");
              setGoalLabel(GOALS[0]);
            }}
            className="pill-button"
          >
            Reset
          </button>
        </div>
        {error && <div style={{ color: "#b33", marginTop: 6, fontSize: 12 }}>{error}</div>}
      </div>
    </section>
  );
}