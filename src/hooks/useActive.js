import { useState } from "react";
const useActive = () => {
  const [currentView, setCurrentView] = useState({ list: null, modal: null });

  const setActive = (type, value) => {
    setCurrentView((prev) => ({ ...prev, [type]: value }));
  };

  const clearActive = (type) => {
    setCurrentView((prev) => ({ ...prev, [type]: false }));
  };

  return { currentView, setCurrentView, setActive, clearActive };
};

export default useActive;
