"use client";

import { useState } from "react";
//import PaceForm from "@/components/PaceForm";
//import ResultsCard from "@/components/ResultsCard";


export default function Page() {
  const [kmCompleted, setKmCompleted] = useState(0) //Create a piece of state called kmCompleted, starting at 0.
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  return (
    <div>
      hellO!
    </div>
  );
}

