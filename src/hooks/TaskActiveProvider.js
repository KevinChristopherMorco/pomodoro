import { createContext, useState, useEffect } from "react";

const TaskActiveContext = createContext();
const CurrentViewContext = createContext();

const TaskActiveProvider = ({ children }) => {
  const [activeId, setId] = useState(
    JSON.parse(localStorage.getItem("activeTask")) || null
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

const CurrentViewProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState(null);

  return (
    <CurrentViewContext.Provider value={(currentView, setCurrentView)}>
      {children}
    </CurrentViewContext.Provider>
  );
};

export {
  TaskActiveProvider,
  TaskActiveContext,
  CurrentViewProvider,
  CurrentViewContext,
};
