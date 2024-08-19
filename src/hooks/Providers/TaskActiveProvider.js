import { createContext, useState, useEffect, useContext } from "react";
import { useTimeContext } from "./TimeProvider";
const TaskActiveContext = createContext();

const TaskActiveProvider = ({ children }) => {
  const {
    timerCount: { stopAlarm },
  } = useTimeContext();

  const [activeId, setId] = useState(
    JSON.parse(localStorage.getItem("activeTask")) || { id: null }
  );
  const setTimerTask = (id) => {
    setId({ id: id });
  };

  const clearTask = () => {
    setId({ id: null });
    stopAlarm(false)
  };

  useEffect(
    () => localStorage.setItem("activeTask", JSON.stringify(activeId)),
    [activeId]
  );

  return (
    <TaskActiveContext.Provider
      value={{ setTimerTask, activeId, setId, clearTask }}
    >
      {children}
    </TaskActiveContext.Provider>
  );
};

const useActiveTask = () => {
  return useContext(TaskActiveContext);
};

export { TaskActiveProvider, useActiveTask };
