type Props = {
  kmCompleted: number;
  setKmCompleted: (value: number) => void;

  hours: number;
  setHours: (value: number) => void;

  minutes: number;
  setMinutes: (value: number) => void;

  seconds: number;
  setSeconds: (value: number) => void;
};

export default function PaceForm({
  kmCompleted,
  setKmCompleted,
  hours,
  setHours,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}: Props) {
  return (
    <div className="border rounded-xl p-4 space-y-4">
      <div>
        <label className="block font-medium">
          KM Completed
        </label>

        <input
          type="number"
          value={kmCompleted}
          onChange={(e) =>
            setKmCompleted(
              Number(e.target.value)
            )
          }
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          Elapsed Time
        </label>

        <div className="flex gap-2">
          <input
            type="number"
            value={hours}
            onChange={(e) =>
              setHours(Number(e.target.value))
            }
            placeholder="HH"
            className="border p-2 rounded w-full"
          />

          <input
            type="number"
            value={minutes}
            onChange={(e) =>
              setMinutes(
                Number(e.target.value)
              )
            }
            placeholder="MM"
            className="border p-2 rounded w-full"
          />

          <input
            type="number"
            value={seconds}
            onChange={(e) =>
              setSeconds(
                Number(e.target.value)
              )
            }
            placeholder="SS"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>
    </div>
  );
}