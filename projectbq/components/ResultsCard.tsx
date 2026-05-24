import {
  formatPace,
  formatTime,
} from "@/utils/formatting";

type Props = {
  milesCompleted: number;
  requiredPaceKm: number;
  requiredPaceMile: number;
  projectedFinishMinutes: number;
};

export default function ResultsCard({
  milesCompleted,
  requiredPaceKm,
  requiredPaceMile,
  projectedFinishMinutes,
}: Props) {
  return (
    <div className="border rounded-xl p-4 space-y-3">
      <h2 className="text-xl font-semibold">
        Results
      </h2>

      <p>
        Miles Completed:{" "}
        {milesCompleted.toFixed(2)}
      </p>

      <p>
        Required Pace (km):{" "}
        {formatPace(requiredPaceKm)}
      </p>

      <p>
        Required Pace (mile):{" "}
        {formatPace(requiredPaceMile)}
      </p>

      <p>
        Projected Finish:{" "}
        {formatTime(projectedFinishMinutes)}
      </p>
    </div>
  );
}