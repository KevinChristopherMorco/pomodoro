import { useState, useContext, useEffect, useMemo } from "react";
import { StorageContext } from "../../storage/LocalStorageProvider";
import { TimerContext } from "../../TimeProvider";
import { TaskActiveContext } from "../../TaskActiveProvider";
import useTimerView from "../../useTimerView";

const useEditTask = (initialTask) => {
  const getStorageContext = useContext(StorageContext);
  const getTimeContext = useContext(TimerContext);
  const getActiveContext = useContext(TaskActiveContext);
  const [edit, setEdit] = useState(false);
  const [tasks, setTasks] = useState(initialTask);
  const { storage, setStorage } = getStorageContext;

  const {
    initialTime: {
      pomodoro: { seconds: pomodoroSec, minutes: pomodoroMin },
      shortBreak: { seconds: shortBreakSec, minutes: shortBreakMin },
      longBreak: { seconds: longBreakSec, minutes: longBreakMin },
    },
    type,
    setType,
    setAction,
  } = getTimeContext;
  const { setId } = getActiveContext;

  const { setTimerView } = useTimerView(setType, setAction);

  const countTaskPomodoro = (task, activeId) => {
    const { id, currentPomodoro, totalPomodoro, countPomodoro } = task;
    if (id !== activeId) return task;

    const remainingPomodoros = Number(totalPomodoro) - currentPomodoro;

    if (remainingPomodoros === 1) {
      setId({ id: null });
      return {
        ...task,
        currentPomodoro: currentPomodoro + 1,
        status: "complete",
      };
    }

    if (remainingPomodoros === 0) return task;

    if (countPomodoro === 3) {
      setTimerView("longBreak", false);
      return {
        ...task,
        currentPomodoro: currentPomodoro + 1,
        countPomodoro: 0,
      };
    }

    setTimerView("shortBreak", false);

    return {
      ...task,
      currentPomodoro: currentPomodoro + 1,
      countPomodoro: countPomodoro + 1,
    };
  };

  useEffect(() => {
    const activeTask = JSON.parse(localStorage.getItem("activeTask"));

    if (!activeTask) return;
    const { id: activeId } = activeTask;
    if (pomodoroMin === 0 && pomodoroSec === 0) {
      setStorage(
        storage.map((task) => {
          return countTaskPomodoro(task, activeId);
        })
      );
    }
  }, [pomodoroSec]);

  useEffect(() => {
    if (
      (type === "shortBreak" && shortBreakSec === 0 && shortBreakMin === 0) ||
      (type === "longBreak" && longBreakSec === 0 && longBreakMin === 0)
    ) {
      setTimerView("pomodoro", false);
    }
  }, [shortBreakSec, longBreakSec]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleTaskSubmit = () => {
    const { id } = initialTask;
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
