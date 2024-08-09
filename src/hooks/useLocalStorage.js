import { useState } from "react";

const useLocalStorage = () => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  return { storage, setStorage };
};

export default useLocalStorage;
