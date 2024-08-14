import React, { createContext, useContext, useState, useMemo } from "react";
const StorageContext = createContext();
const StorageContextProvider = ({ children }) => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useMemo(() => {
    localStorage.setItem("tasks", JSON.stringify(storage));
  }, [storage]);

  return (
    <StorageContext.Provider value={{ storage, setStorage }}>
      {children}
    </StorageContext.Provider>
  );
};

const useStorageContext = () => {
  return useContext(StorageContext);
};

export { StorageContextProvider, useStorageContext };
