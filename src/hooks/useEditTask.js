import { useState, useEffect } from "react";

const useEditTask = (initialTask) => {
  const [edit, setEdit] = useState(false);
  const [tasks, setTasks] = useState(initialTask);

  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(storage));
  }, [storage]);

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
