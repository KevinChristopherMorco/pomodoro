const useTimer = () => {
  const [type, setType] = useState(localStorage.getItem("type") || "pomodoro");

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
};

export default useTimer;
