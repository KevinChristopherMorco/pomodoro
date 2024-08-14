import { useState, useEffect, useContext, useMemo } from "react";
import { v4 as uuid } from "uuid";
import { StorageContext } from "../../storage/LocalStorageProvider";

const useAddTask = () => {
  const getStorageContext = useContext(StorageContext);
  const { setStorage } = getStorageContext;

  const [tasks, setTasks] = useState({
    id: "",
    title: "",
    note: "",
    countPomodoro: 0,
    totalPomodoro: 1,
    currentPomodoro: 0,
    status: "incomplete",
  });

  const handleSubmit = () => {
    const submitTask = {
      ...tasks,
      id: `${uuid()}-${new Date().getTime()}`,
    };
    setStorage((prev) => {
      return [...prev, submitTask];
    });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return {
    tasks,
    handleInput,
    handleSubmit,
  };
};

export default useAddTask;
