import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorage from "./useLocalStorage";

const useAddTask = () => {
  const { storage, setStorage } = useLocalStorage();

  const [tasks, setTasks] = useState({
    id: "",
    title: "",
    note: "",
    totalPomodoro: 1,
    currentPomdoro: 0,
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(storage));
  }, [storage]);

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
