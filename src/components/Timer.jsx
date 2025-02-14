import React from "react";

import { useActiveTask } from "../hooks/Providers/TaskActiveProvider";
import { useTimeContext } from "../hooks/Providers/TimeProvider";

const Timer = () => {
  const {
    timerActions: { setTimer, resetTimer },
    timerType: { type, setType },

    timerCount: { action, setAction, alarm, stopAlarm },
  } = useTimeContext();
  const { hours, minutes, seconds } = setTimer();
  const { activeId } = useActiveTask();
  const { id } = activeId;

  const handleAction = () => {
    setAction(!action);
    stopAlarm(!alarm);
  };

  return (
    <div className="h-full flex flex-col">
      <ul className="w-[100%] my-10 flex justify-around font-medium">
        <li
          className={`cursor-pointer p-2 rounded-lg ${
            type === "pomodoro"
              ? "bg-[var(--accent-color)] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setType("pomodoro")}
        >
          Pomodoro
        </li>

        <li
          className={`cursor-pointer p-2 rounded-lg ${
            type === "shortBreak"
              ? "bg-[var(--accent-color)] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setType("shortBreak")}
        >
          Short Break
        </li>
        <li
          className={`cursor-pointer p-2 rounded-lg ${
            type === "longBreak"
              ? "bg-[var(--accent-color)] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setType("longBreak")}
        >
          Long Break
        </li>
      </ul>
      <div className="p-4 flex flex-col items-center gap-y-14">
        <div className="flex flex-col gap-y-10 text-center">
          <h1 className="text-5xl font-bold">
            {String(hours).padStart(2, 0)} : {String(minutes).padStart(2, 0)} :{" "}
            {String(seconds).padStart(2, 0)}
          </h1>
          <h6
            className={`text-lg font-medium italic transition-all duration-500${
              action
                ? "opacity-100 max-h-20"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            Finishing a task...
          </h6>
        </div>
        <div className={`flex justify-center gap-x-10 ${!id && "hidden"}`}>
          <button
            className="bg-[var(--accent-color)] p-4 flex justify-center items-center font-bold text-xl text-[var(--text-accent)] rounded-full"
            onClick={handleAction}
          >
            {action ? (
              <ion-icon name="pause"></ion-icon>
            ) : (
              <ion-icon name="play"></ion-icon>
            )}
          </button>
          <button
            className="p-4 flex justify-center items-center font-bold text-xl border-2 border-[var(--secondary-color)] rounded-full"
            onClick={() => resetTimer()}
          >
            <ion-icon name="refresh"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
