export default function PaceForm({
  kmCompleted,
  setKmCompleted,
  hours,
  setHours,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}) {
  return (
    <div className="form-panel">
      <div className="field-group">
        <label htmlFor="km" className="control-label">
          KM Completed
        </label>

        <input
          id="km"
          type="number"
          value={kmCompleted}
          onChange={(e) => setKmCompleted(e.target.value)}
          className="text-input"
          placeholder="Distance in kilometers"
        />
      </div>

      <div className="field-group">
        <label className="control-label">Elapsed Time</label>

        <div className="time-row">
          <div>
            <input
              aria-label="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="text-input time-input"
              placeholder="HH"
            />
          </div>

          <div>
            <input
              aria-label="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="text-input time-input"
              placeholder="MM"
            />
          </div>

          <div>
            <input
              aria-label="seconds"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              className="text-input time-input"
              placeholder="SS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}