import { useState, useContext, useEffect, useMemo } from "react";
import { TaskActiveContext } from "../../TaskActiveProvider";
import useTimerView from "../../useTimerView";
import { useStorageContext } from "../../storage/LocalStorageProvider";
import { useTimeContext } from "../../TimeProvider";
import { useActiveTask } from "../../TaskActiveProvider";

const useEditTask = (initialTask) => {
  const [edit, setEdit] = useState(false);
  const [tasks, setTasks] = useState(initialTask);
  const { storage, setStorage } = useStorageContext();

  const {
    initialTime: {
      pomodoro: { seconds: pomodoroSec, minutes: pomodoroMin },
      shortBreak: { seconds: shortBreakSec, minutes: shortBreakMin },
      longBreak: { seconds: longBreakSec, minutes: longBreakMin },
    },
    type,
    setType,
    setAction,
  } = useTimeContext();
  const { setId } = useActiveTask();

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
