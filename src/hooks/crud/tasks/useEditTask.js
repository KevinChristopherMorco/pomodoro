import { useState, useContext, useEffect, useMemo } from "react";
import { StorageContext } from "../../storage/LocalStorageProvider";
import { TimerContext } from "../../TimeProvider";
import { TaskActiveContext } from "../../TaskActiveProvider";

const useEditTask = (initialTask) => {
  const getStorageContext = useContext(StorageContext);
  const getTimeContext = useContext(TimerContext);
  const getActiveContext = useContext(TaskActiveContext);
  const [edit, setEdit] = useState(false);
  const [tasks, setTasks] = useState(initialTask);
  const { storage, setStorage } = getStorageContext;
  const { id } = initialTask;
  const {
    initialTime: {
      pomodoro: { seconds, minutes },
    },
  } = getTimeContext;
  const { setId } = getActiveContext;

  useEffect(() => {
    const activeTaskId = localStorage.getItem("activeTask");
    if (!activeTaskId) return;

    if (minutes === 0 && seconds === 0) {
      setStorage(
        storage.map((task) => {
          const { id, currentPomodoro, totalPomodoro } = task;

          if (id !== activeTaskId) return task;

          const remainingPomodoros = Number(totalPomodoro) - currentPomodoro;

          if (remainingPomodoros === 1) {
            setId(null);
            return {
              ...task,
              currentPomodoro: currentPomodoro + 1,
              status: "complete",
            };
          }

          if (remainingPomodoros === 0) return task;

          return { ...task, currentPomodoro: currentPomodoro + 1 };
        })
      );
    }
  }, [seconds]);

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
