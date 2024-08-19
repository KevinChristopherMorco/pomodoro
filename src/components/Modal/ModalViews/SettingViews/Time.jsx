import React from "react";
import { useTimeContext } from "../../../../hooks/Providers/TimeProvider";
import useEditTimer from "../../../../hooks/crud/timer/useEditTimer";

const Time = ({ currentView }) => {
  const {
    timerActions: { populateTimerValue },
  } = useTimeContext();
  const { handleInputChange, handleTimerSubmit } = useEditTimer();
  const {
    pomodoroHours,
    pomodoroMinutes,
    pomodoroSeconds,
    longBreakHours,
    longBreakMinutes,
    longBreakSeconds,
    shortBreakHours,
    shortBreakMinutes,
    shortBreakSeconds,
  } = populateTimerValue();
  const { list } = currentView;

  return (
    <div
      className={`transition-opacity delay-75 ${
        list === "timer" ? "opacity-100" : "opacity-0"
      }`}
    >
      <form
        className={`${
          list === "timer"
            ? "min-h-[23rem] flex flex-wrap content-between"
            : "hidden"
        }`}
        onSubmit={handleTimerSubmit}
      >
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Pomodoro
          </label>
          <div className="w-full flex justify-between">
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="hours"
                data-type="pomodoro"
                min={0}
                placeholder={pomodoroHours}
                onChange={handleInputChange}
              />
              <p>hours</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="minutes"
                data-type="pomodoro"
                max={59}
                min={0}
                placeholder={pomodoroMinutes}
                onChange={handleInputChange}
              />
              <p>minutes</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="seconds"
                data-type="pomodoro"
                max={59}
                min={0}
                placeholder={pomodoroSeconds}
                onChange={handleInputChange}
              />
              <p>seconds</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Long Break
          </label>
          <div className="w-full flex justify-between">
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="hours"
                data-type="longBreak"
                min={0}
                placeholder={longBreakHours}
                onChange={handleInputChange}
              />
              <p>hours</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="minutes"
                data-type="longBreak"
                max={59}
                min={0}
                placeholder={longBreakMinutes}
                onChange={handleInputChange}
              />
              <p>minutes</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="seconds"
                max={59}
                min={0}
                data-type="longBreak"
                placeholder={longBreakSeconds}
                onChange={handleInputChange}
              />
              <p>seconds</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Short Break
          </label>
          <div className="w-full flex justify-between">
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="hours"
                data-type="shortBreak"
                min={0}
                placeholder={shortBreakHours}
                onChange={handleInputChange}
              />
              <p>hours</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="minutes"
                data-type="shortBreak"
                max={59}
                min={0}
                placeholder={shortBreakMinutes}
                onChange={handleInputChange}
              />
              <p>minutes</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
                name="seconds"
                data-type="shortBreak"
                max={59}
                min={0}
                placeholder={shortBreakSeconds}
                onChange={handleInputChange}
              />
              <p>seconds</p>
            </div>
          </div>
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
