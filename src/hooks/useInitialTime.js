import { useState } from "react";
const useInitialTime = () => {
  const [initialTime, setInitialTime] = useState(
    JSON.parse(localStorage.getItem("time")) || {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
    }
  );

  return { initialTime, setInitialTime };
};

export default useInitialTime;
