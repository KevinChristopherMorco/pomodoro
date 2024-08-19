import { createContext, useState, useEffect, useContext } from "react";

const TaskActiveContext = createContext();

const TaskActiveProvider = ({ children }) => {
  const [activeId, setId] = useState(
    JSON.parse(localStorage.getItem("activeTask")) || { id: null }
  );
  const setTimerTask = (id) => {
    setId({ id: id });
  };

  useEffect(
    () => localStorage.setItem("activeTask", JSON.stringify(activeId)),
    [activeId]
  );

  return (
    <TaskActiveContext.Provider value={{ setTimerTask, activeId, setId }}>
      {children}
    </TaskActiveContext.Provider>
  );
};

const useActiveTask = () => {
  return useContext(TaskActiveContext);
};

export { TaskActiveProvider, useActiveTask };
