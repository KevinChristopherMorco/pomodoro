import { useState } from "react";
const useListActive = () => {
  const [currentView, setCurrentView] = useState(null);
  return { currentView, setCurrentView };
};

export default useListActive;
