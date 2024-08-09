import { useState } from "react";
const useListActive = () => {
  const [currentView, setCurrentView] = useState(null);

  const setActive = (event) => {
    const { id } = event.target;
    setCurrentView(id);
  };

  return { currentView, setActive };
};

export default useListActive;
