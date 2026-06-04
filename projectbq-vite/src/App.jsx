import "./App.css";
import { useMemo, useState } from "react";

import PaceForm from "./components/PaceForm";
import GoalSelector from "./components/GoalSelector";
import ResultsCard from "./components/ResultsCard";

import {
  calculateRequiredPaceKm,
  calculateProjectedFinishMinutes,
} from "./utils/calculations";

import {
  kmToMiles,
  paceKmToMile,
} from "./utils/conversions";

import {
  goalTimeToMinutes,
  timeToMinutes,
} from "./utils/formatting";


function App() {
  // inputs (ALL STRINGS)
  const [kmCompleted, setKmCompleted] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [goalLabel, setGoalLabel] = useState("3:25"); //how to get selected goal time to pass through here?

  const targetMinutes = goalTimeToMinutes(goalLabel);

  // safe numeric conversion
  const km = Number(kmCompleted);
  const h = Number(hours);
  const m = Number(minutes);
  const s = Number(seconds);

  const elapsedMinutes = timeToMinutes(h, m, s);

  const calculations = useMemo(() => {
    if (!km || !elapsedMinutes) {
      return {
        requiredPaceKm: 0,
        requiredPaceMile: 0,
        projectedFinishMinutes: 0,
        milesCompleted: 0,
      };
    }

    const requiredPaceKm = calculateRequiredPaceKm(
      targetMinutes,
      elapsedMinutes,
      km
    );

    const requiredPaceMile = paceKmToMile(requiredPaceKm);

    const projectedFinishMinutes = calculateProjectedFinishMinutes(
      elapsedMinutes,
      km
    );

    return {
      requiredPaceKm,
      requiredPaceMile,
      projectedFinishMinutes,
      milesCompleted: kmToMiles(km),
    };
  }, [km, elapsedMinutes, targetMinutes]);

  return (
    <main className="app-shell">
      <div className="app-container">
        <header className="page-header">
          <span className="eyebrow">Boston Qualifier Pace Tracker</span>
          <h1>Marathon Pace Tracker</h1>
          <p className="lead">
            Enter your distance and elapsed time to see your required pace and finish projection.
          </p>
        </header>

        <section className="app-grid">
          <div className="card card-panel">
            <GoalSelector
              goalLabel={goalLabel}
              setGoalLabel={setGoalLabel}
            />
            <PaceForm
              kmCompleted={kmCompleted}
              setKmCompleted={setKmCompleted}
              hours={hours}
              setHours={setHours}
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
            />
          </div>

          <ResultsCard calculations={calculations} />
        </section>
      </div>
    </main>
  );
}

export default App;