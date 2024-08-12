import { useState, useContext } from "react";
import { TimerContext } from "../../TimeProvider";
const useEditTimer = () => {
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

  const handleTimerSubmit = (event) => {
    event.preventDefault();
    setInitialTime(() => ({ ...values }));
    localStorage.setItem("time", JSON.stringify(values));
  };

  const handleInputChange = (event) => {
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
  return {
    handleTimerSubmit,
    handleInputChange,
  };
};

export default useEditTimer;
