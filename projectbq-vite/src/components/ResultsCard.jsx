import {
  formatPace,
  formatTime,
} from "../utils/formatting";

export default function ResultsCard({ calculations }) {
  return (
    <aside className="card card-results">
      <div className="card-header">
        <span className="eyebrow">Live Estimate</span>
        <h2>Results</h2>
      </div>

      <dl className="stat-list">
        <div className="stat-item">
          <dt>Miles completed</dt>
          <dd>{calculations.milesCompleted.toFixed(2)}</dd>
        </div>

        <div className="stat-item">
          <dt>Required pace (km)</dt>
          <dd>{formatPace(calculations.requiredPaceKm)}</dd>
        </div>

        <div className="stat-item">
          <dt>Required pace (mile)</dt>
          <dd>{formatPace(calculations.requiredPaceMile)}</dd>
        </div>

        <div className="stat-item">
          <dt>Projected finish</dt>
          <dd>{formatTime(calculations.projectedFinishMinutes)}</dd>
        </div>
      </dl>
    </aside>
  );
}