import React, { useState, useEffect } from "react";
import chick from "../gif/chick.gif";
import test from "../gif/test.gif";
import Swal from "sweetalert2";

const Timer = ({ initialTime }) => {
  const [type, setType] = useState(localStorage.getItem("type") || "pomodoro");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(() => {
    if (type === "pomodoro") {
      return initialTime.pomodoro || 25;
    }
    if (type === "longBreak") {
      return initialTime.longBreak || 15;
    }
    if (type === "shortBreak") {
      return initialTime.shortBreak || 5;
    }
  });
  const [action, setAction] = useState(false);
  const [active, setActive] = useState(null);

  const time = {
    pomodoro: { minutes: initialTime.pomodoro || 25, seconds: 0 },
    longBreak: { minutes: initialTime.longBreak || 15, seconds: 0 },
    shortBreak: { minutes: initialTime.shortBreak || 5, seconds: 0 },
    default: { minutes: 25, seconds: 0 },
  };

  const handleUserAction = () => {
    action ? setAction(false) : setAction(true);
  };

  const handleType = (event) => {
    const { id } = event.target;
    const { minutes, seconds } = time[id];

    setMinutes(minutes);
    setSeconds(seconds);
    setType(id);
    setActive(id);
    setAction(false);

    // if (check) {
    //   Swal.fire({
    //     title: "Warning!",
    //     text: "Proceeding might not save your current progress, continue? ",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonText: "Continue",
    //     reverseButtons: true,
    //     customClass: {
    //       cancelButton: "bg-transparent text-accent",
    //       confirmButton: "bg-accent",
    //     },
    //   }).then((userAction) => {
    //     if (userAction.isConfirmed) {
    //       setMinutes(minutes);
    //       setSeconds(seconds);
    //       setType(id);
    //       setActive(id);
    //       setAction(false);
    //     }
    //   });
    // } else {
    //   setMinutes(minutes);
    //   setSeconds(seconds);
    //   setType(id);
    //   setActive(id);
    //   setAction(false);
    // }
  };

  const reset = () => {
    const { minutes, seconds } = time[type] || time.default;

    setMinutes(minutes);
    setSeconds(seconds);
    setAction(false);
  };

  useEffect(() => {
    if (action) {
      const interval = setInterval(() => {
        setSeconds(() => {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            return 59;
          } else {
            return seconds - 1;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [action, seconds, minutes]);

  useEffect(() => {
    localStorage.setItem("type", type);
  }, [type]);

  useEffect(() => {
    if (type === "pomodoro") {
      setMinutes(initialTime.pomodoro);
    } else if (type === "longBreak") {
      setMinutes(initialTime.longBreak);
    } else {
      setMinutes(initialTime.shortBreak);
    }
  }, [initialTime]);

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
          onClick={handleType}
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
          onClick={handleType}
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
          onClick={handleType}
        >
          Short Break
        </li>
      </ul>
      <div className="p-4 flex flex-col items-center gap-y-14">
        <div className="flex flex-col gap-y-10 text-center">
          <img
            src={minutes === 0 ? test : chick}
            alt=""
            className={`transition-all duration-500 ${
              action
                ? "opacity-100 max-h-52"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          />
          <h1 className="text-7xl font-bold">
            {String(minutes).padStart(2, 0)} : {String(seconds).padStart(2, 0)}
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
            onClick={handleUserAction}
          >
            {action ? (
              <ion-icon name="pause"></ion-icon>
            ) : (
              <ion-icon name="play"></ion-icon>
            )}
          </button>
          <button
            className="p-4 flex justify-center items-center font-bold text-xl border-2 border-[var(--secondary-color)] rounded-full"
            onClick={reset}
          >
            <ion-icon name="refresh"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
