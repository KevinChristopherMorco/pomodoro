import { useState, useEffect, useContext } from "react";
import { StorageContext } from "./LocalStorageProvider";
const useEditTask = (initialTask) => {
  const getStorageContext = useContext(StorageContext);
  const { storage, setStorage } = getStorageContext;
  const [edit, setEdit] = useState(false);
  const [tasks, setTasks] = useState(initialTask);

  const handleDelete = () => {
    setStorage(storage.filter((x) => x.id !== initialTask.id));
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    const { title, note } = tasks;
    setStorage(
      storage.map((task) => {
        return task.id === initialTask.id
          ? { ...task, title: title, note: note }
          : task;
      })
    );
    setEdit(false);
  };

  return {
    tasks,
    edit,
    setEdit,
    handleInput,
    handleSubmit,
    handleDelete,
  };
};

export default useEditTask;
