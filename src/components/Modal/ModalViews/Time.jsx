import React from "react";
import useInitialTime from "../../../hooks/useInitialTime";

const Time = ({ currentView }) => {
  const { initialTime, setInitialTime } = useInitialTime();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("time", JSON.stringify(initialTime));
    setInitialTime(initialTime);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInitialTime((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div
      className={`transition-opacity delay-75 ${
        currentView === "timer" ? "opacity-100" : "opacity-0"
      }`}
    >
      <form
        className={`${
          currentView === "timer"
            ? "min-h-[23rem] flex flex-wrap content-between"
            : "hidden"
        }`}
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Pomodoro
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-[var(--secondary-color)] bg-transparent rounded"
            id="pomodoro"
            name="pomodoro"
            onChange={onChange}
            value={initialTime.pomodoro}
          />
          <p>minutes</p>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Long Break
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-[var(--secondary-color)] bg-transparent rounded"
            id="longBreak"
            name="longBreak"
            onChange={onChange}
            value={initialTime.longBreak}
          />
          <p>minutes</p>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Short Break
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-[var(--secondary-color)] bg-transparent rounded"
            id="shortBreak"
            name="shortBreak"
            onChange={onChange}
            value={initialTime.shortBreak}
          />
          <p>minutes</p>
        </div>
        <div className="w-full pt-4 mt-4 flex justify-end border-t border-[var(--secondary-color)]">
          <input
            type="submit"
            className="w-fit px-4 py-2 self-end bg-[var(--accent-color)] text-white rounded-lg cursor-pointer"
            value="Save"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Time;
