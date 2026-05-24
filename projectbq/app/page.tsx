"use client";

import { useMemo, useState } from "react";
import PaceForm from "@/components/PaceForm";
import ResultsCard from "@/components/ResultsCard";

import {
  calculateRequiredPaceKm,
  calculateProjectedFinishMinutes,
} from "@/utils/calculations";

import {
  kmToMiles,
  paceKmToMile,
} from "@/utils/conversions";

import {
  formatPace,
  formatTime,
  timeToMinutes,
} from "@/utils/formatting";

export default function Page() {
  const [kmCompleted, setKmCompleted] = useState(0);

  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(40);
  const [seconds, setSeconds] = useState(0);

  // 3:25 marathon goal
  const targetMinutes = 205;

  const elapsedMinutes = timeToMinutes(
    hours,
    minutes,
    seconds
  );

  const calculations = useMemo(() => {
    const requiredPaceKm = calculateRequiredPaceKm(
      targetMinutes,
      elapsedMinutes,
      kmCompleted
    );

    const requiredPaceMile =
      paceKmToMile(requiredPaceKm);

    const projectedFinishMinutes =
      calculateProjectedFinishMinutes(
        elapsedMinutes,
        kmCompleted
      );

    return {
      requiredPaceKm,
      requiredPaceMile,
      projectedFinishMinutes,
      milesCompleted: kmToMiles(kmCompleted),
    };
  }, [elapsedMinutes, kmCompleted]);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">
          Marathon Pace Calculator
        </h1>

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

        <ResultsCard
          milesCompleted={
            calculations.milesCompleted
          }
          requiredPaceKm={
            calculations.requiredPaceKm
          }
          requiredPaceMile={
            calculations.requiredPaceMile
          }
          projectedFinishMinutes={
            calculations.projectedFinishMinutes
          }
        />
      </div>
    </main>
  );
}
