import React, { useState, useEffect } from "react";
import chick from "../gif/chick.gif";
import test from "../gif/test.gif";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [action, setAction] = useState(false);

  const handleUserAction = () => {
    action ? setAction(false) : setAction(true);
  };

  const handleTime = (event) => {
    const { id } = event.target;
    setAction(false);

    switch (id) {
      case "pomodoro":
        setMinutes(25);
        setSeconds(0);
        break;
      case "longBreak":
        setMinutes(15);
        setSeconds(0);
        break;
      case "shortBreak":
        setMinutes(5);
        setSeconds(0);
        break;
      default:
        break;
    }
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

  return (
    <div className="h-full flex flex-col">
      <ul className="w-[100%] my-10 flex justify-around font-medium">
        <li id="pomodoro" className="cursor-pointer" onClick={handleTime}>
          Pomodoro
        </li>
        <li id="longBreak" className="cursor-pointer" onClick={handleTime}>
          Long Break
        </li>
        <li id="shortBreak" className="cursor-pointer" onClick={handleTime}>
          Short Break
        </li>
      </ul>
      <div className="p-4 flex flex-col items-center gap-y-14">
        <div className="flex flex-col gap-y-10 text-center">
          <img src={minutes <= 23 ? test : chick} alt="" />
          <h1 className="text-6xl font-bold">
            {String(minutes).padStart(2, 0)} : {String(seconds).padStart(2, 0)}
          </h1>
          <h6 className="text-lg font-medium italic">Chicken is growing...</h6>
        </div>
        <div className="flex justify-center gap-x-10">
          <button
            className="bg-accent p-4 flex justify-center items-center font-bold text-xl text-white rounded-full"
            onClick={handleUserAction}
          >
            {action ? (
              <ion-icon name="pause"></ion-icon>
            ) : (
              <ion-icon name="play"></ion-icon>
            )}
          </button>
          <button className="p-4 flex justify-center items-center font-bold text-xl border-2 border-secondary rounded-full">
            <ion-icon name="refresh"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
