import React, { useState, useEffect } from "react";

const Timer = () => {
  const [type, setType] = useState();
  const [time, setTime] = useState();
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
    <div>
      <ul className="flex justify-around">
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
      <h1>
        {String(minutes).padStart(2, 0)} : {String(seconds).padStart(2, 0)}
      </h1>

      <button onClick={handleUserAction}>{action ? "Pause" : "Start"}</button>
      <button>Reset</button>
    </div>
  );
};

export default Timer;
