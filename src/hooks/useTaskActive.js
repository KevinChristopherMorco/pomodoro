import { useEffect, useState } from "react";

const useTaskActive = () => {
  const [activeId, setId] = useState(
    localStorage.getItem("activeTask") || null
  );
  const setTimerTask = (id) => {
    setId(id);
  };

  useEffect(() => localStorage.setItem("activeTask", activeId), [activeId]);

  return { setTimerTask, activeId, setId };
};

export default useTaskActive;
