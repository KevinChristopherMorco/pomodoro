import React, { useState, useEffect } from "react";

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
    <div className="h-full flex flex-col gap-y-[20%]">
      <ul className="w-[100%] my-10 flex justify-around">
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
      <div className="p-4 flex flex-col items-center gap-y-20">
        <h1 className="text-4xl font-bold">
          {String(minutes).padStart(2, 0)} : {String(seconds).padStart(2, 0)}
        </h1>
        <div className="flex justify-center gap-x-10">
          <button
            className="bg-accent p-4 flex justify-center items-center font-bold text-xl rounded-full"
            onClick={handleUserAction}
          >
            {action ? "Pause" : <ion-icon name="play"></ion-icon>}
          </button>
          <button className="p-4 flex justify-center items-center font-bold text-xl border-2 border-accent rounded-full">
            <ion-icon name="refresh"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
