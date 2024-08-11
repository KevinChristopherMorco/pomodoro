import React, { useContext, useState } from "react";
import useInitialTime from "../../../hooks/useInitialTime";
import { TimerContext } from "../../../hooks/TimeProvider";

const Time = ({ currentView }) => {
  const getTimeContext = useContext(TimerContext);
  const { setInitialTime, populateTimerValue } = getTimeContext;
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

  //State for user inputs
  const [values, setValue] = useState({
    pomodoro: {
      hours: pomodoroHours,
      minutes: pomodoroMinutes,
      seconds: pomodoroSeconds,
    },
    shortBreak: {
      hours: longBreakHours,
      minutes: longBreakMinutes,
      seconds: longBreakSeconds,
    },
    longBreak: {
      hours: shortBreakHours,
      minutes: shortBreakMinutes,
      seconds: shortBreakSeconds,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setInitialTime(() => ({ ...values }));
    localStorage.setItem("time", JSON.stringify(values));
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    const { type } = event.target.dataset;
    setValue((prev) => {
      const { hours, minutes, seconds } = prev[type];
      return {
        ...prev,
        [type]: {
          hours: hours,
          minutes: minutes,
          seconds: seconds,
          [name]: Number(value),
        },
      };
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
          <div className="w-full flex justify-between">
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="hours"
                data-type="pomodoro"
                min={0}
                placeholder={pomodoroHours}
                onChange={onChange}
              />
              <p>hours</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="minutes"
                data-type="pomodoro"
                max={59}
                min={0}
                placeholder={pomodoroMinutes}
                onChange={onChange}
              />
              <p>minutes</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="seconds"
                data-type="pomodoro"
                max={59}
                min={0}
                placeholder={pomodoroSeconds}
                onChange={onChange}
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
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="hours"
                data-type="longBreak"
                min={0}
                placeholder={longBreakHours}
                onChange={onChange}
              />
              <p>hours</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="minutes"
                data-type="longBreak"
                max={59}
                min={0}
                placeholder={longBreakMinutes}
                onChange={onChange}
              />
              <p>minutes</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="seconds"
                max={59}
                min={0}
                data-type="longBreak"
                placeholder={longBreakSeconds}
                onChange={onChange}
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
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="hours"
                data-type="shortBreak"
                min={0}
                placeholder={shortBreakHours}
                onChange={onChange}
              />
              <p>hours</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="minutes"
                data-type="shortBreak"
                max={59}
                min={0}
                placeholder={shortBreakMinutes}
                onChange={onChange}
              />
              <p>minutes</p>
            </div>
            <div className="basis-[30%]">
              <input
                type="number"
                className="w-full px-2 py-1 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-transparent rounded"
                name="seconds"
                data-type="shortBreak"
                max={59}
                min={0}
                placeholder={shortBreakSeconds}
                onChange={onChange}
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
