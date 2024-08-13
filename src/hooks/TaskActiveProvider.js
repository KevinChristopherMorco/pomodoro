import { createContext, useState, useEffect } from "react";

const TaskActiveContext = createContext();

const TaskActiveProvider = ({ children }) => {
  const [activeId, setId] = useState(
    localStorage.getItem("activeTask") || null
  );
  const setTimerTask = (id) => {
    setId(id);
  };

  useEffect(() => localStorage.setItem("activeTask", activeId), [activeId]);

  return (
    <TaskActiveContext.Provider value={{ setTimerTask, activeId, setId }}>
      {children}
    </TaskActiveContext.Provider>
  );
};

export { TaskActiveProvider, TaskActiveContext };
