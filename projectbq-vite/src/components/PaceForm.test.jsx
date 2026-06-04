import { render, screen, fireEvent } from "@testing-library/react";
import PaceForm from "./PaceForm";

describe("PaceForm", () => {
  test("updates km input", () => {
    const setKmCompleted = vi.fn();

    render(
      <PaceForm
        kmCompleted=""
        setKmCompleted={setKmCompleted}
        hours=""
        setHours={() => {}}
        minutes=""
        setMinutes={() => {}}
        seconds=""
        setSeconds={() => {}}
      />
    );

    const input = screen.getByLabelText(/km completed/i);

    fireEvent.change(input, {
      target: { value: "25" },
    });

    expect(setKmCompleted).toHaveBeenCalledWith("25");
  });
});