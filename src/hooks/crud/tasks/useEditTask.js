import { useState, useContext } from "react";
import { StorageContext } from "../../LocalStorageProvider";
const useEditTask = (initialTask) => {
  const getStorageContext = useContext(StorageContext);
  const { storage, setStorage } = getStorageContext;
  const { id } = initialTask;
  const [edit, setEdit] = useState(false);
  const [tasks, setTasks] = useState(initialTask);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleTaskSubmit = () => {
    const { title, note } = tasks;
    setStorage(
      storage.map((task) => {
        return task.id === id ? { ...task, title: title, note: note } : task;
      })
    );
    setEdit(false);
  };

  return {
    tasks,
    edit,
    setEdit,
    handleInputChange,
    handleTaskSubmit,
  };
};

export default useEditTask;
