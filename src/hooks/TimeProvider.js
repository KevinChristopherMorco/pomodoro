import { useState, useEffect, createContext, useMemo } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [initialTime, setInitialTime] = useState(() => {
    const defaultTime = {
      pomodoro: { hours: 0, minutes: 25, seconds: 0 },
      shortBreak: { hours: 0, minutes: 5, seconds: 0 },
      longBreak: { hours: 0, minutes: 15, seconds: 0 },
    };

    const storedTime = JSON.parse(localStorage.getItem("time"));
    if (storedTime) {
      return storedTime;
    } else {
      localStorage.setItem("time", JSON.stringify(defaultTime));
      return defaultTime;
    }
  });

  const [type, setType] = useState(localStorage.getItem("type") || "pomodoro");

  const setTimer = () => {
    const { hours, minutes, seconds } = initialTime[type];

    return { hours, minutes, seconds };
  };

  //Set the type of timer pomodoro,shortbreak and longbreak and set it to the localstorage
  useEffect(() => {
    const storedTime = JSON.parse(localStorage.getItem("time"));
    localStorage.setItem("type", type);
    setInitialTime(storedTime);
  }, [type]);

  const [action, setAction] = useState(false);

  //Diminish 1 second if timer was started
  useEffect(() => {
    if (action) {
      const interval = setInterval(() => {
        return setInitialTime((prev) => {
          let { hours, minutes, seconds } = prev[type];

          if (seconds > 0) {
            seconds -= 1;
          } else if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(interval);
            setAction(false);
          }

          return {
            ...prev,
            [type]: { hours: hours, minutes: minutes, seconds: seconds },
          };
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [action]);

  const resetTimer = () => {
    const storedTime = JSON.parse(localStorage.getItem("time"));
    const { hours, minutes, seconds } = storedTime[type];
    setInitialTime((prev) => {
      return {
        ...prev,
        [type]: { hours: hours, minutes: minutes, seconds: seconds },
      };
    });
  };

  const populateTimerValue = () => {
    const storedTime = JSON.parse(localStorage.getItem("time"));
    // console.log(storedTime);

    const {
      pomodoro: {
        hours: pomodoroHours,
        minutes: pomodoroMinutes,
        seconds: pomodoroSeconds,
      },
      longBreak: {
        hours: longBreakHours,
        minutes: longBreakMinutes,
        seconds: longBreakSeconds,
      },
      shortBreak: {
        hours: shortBreakHours,
        minutes: shortBreakMinutes,
        seconds: shortBreakSeconds,
      },
    } = storedTime;

    const populateTime = {
      pomodoroHours,
      pomodoroMinutes,
      pomodoroSeconds,
      longBreakHours,
      longBreakMinutes,
      longBreakSeconds,
      shortBreakHours,
      shortBreakMinutes,
      shortBreakSeconds,
    };

    return populateTime;
  };
  return (
    <TimerContext.Provider
      value={{
        initialTime,
        setInitialTime,
        type,
        setType,
        setTimer,
        action,
        setAction,
        resetTimer,
        populateTimerValue,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider, TimerContext };
