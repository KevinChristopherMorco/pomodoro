import { useState, useEffect, useContext, useMemo } from "react";
import { v4 as uuid } from "uuid";
import { useStorageContext } from "../../storage/LocalStorageProvider";

import { successAlert, errorAlert } from "../../../components/Alerts/alerts";

const useAddTask = () => {
  const { setStorage } = useStorageContext();

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
    if (tasks.title === "") return errorAlert();
    const submitTask = {
      ...tasks,
      id: `${uuid()}-${new Date().getTime()}`,
    };
    setStorage((prev) => {
      return [...prev, submitTask];
    });

    setTasks({ ...tasks, title: "", note: "" });
    successAlert("Task", "added");
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
