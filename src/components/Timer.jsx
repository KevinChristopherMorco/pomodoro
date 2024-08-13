import React, { useState, useEffect, useContext } from "react";
import chick from "../gif/chick.gif";
import test from "../gif/test.gif";
import Swal from "sweetalert2";

import { TimerContext } from "../hooks/TimeProvider";

const Timer = () => {
  const getTimeContext = useContext(TimerContext);
  const { type, setType, setTimer, action, setAction, resetTimer } =
    getTimeContext;
  const { hours, minutes, seconds } = setTimer();

  return (
    <div className="h-full flex flex-col">
      <ul className="w-[100%] my-10 flex justify-around font-medium">
        <li
          id="pomodoro"
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
          id="longBreak"
          className={`cursor-pointer p-2 rounded-lg ${
            type === "longBreak"
              ? "bg-[var(--accent-color)] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setType("longBreak")}
        >
          Long Break
        </li>
        <li
          id="shortBreak"
          className={`cursor-pointer p-2 rounded-lg ${
            type === "shortBreak"
              ? "bg-[var(--accent-color)] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setType("shortBreak")}
        >
          Short Break
        </li>
      </ul>
      <div className="p-4 flex flex-col items-center gap-y-14">
        <div className="flex flex-col gap-y-10 text-center">
          {/* <img
            src={minutes === 0 ? test : chick}
            alt=""
            className={`transition-all duration-500 ${
              action
                ? "opacity-100 max-h-52"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          /> */}
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
            Chicken is growing...
          </h6>
        </div>
        <div className="flex justify-center gap-x-10">
          <button
            className="bg-[var(--accent-color)] p-4 flex justify-center items-center font-bold text-xl text-[var(--text-accent)] rounded-full"
            onClick={() => setAction(!action)}
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
