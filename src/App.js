import logo from "./logo.svg";
import "./App.css";

import Timer from "./components/Timer";
import Header from "./components/Header";
import SettingModal from "./components/Modal/SettingModal";
import TasksModal from "./components/Modal/TasksModal";
import { useState, useEffect } from "react";

function App() {
  document.body.classList.add("twilight");
  const [settings, setSettings] = useState(false);
  const [tasksModal, setTasksModal] = useState(false);

  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [initialTime, setInitialTime] = useState(
    JSON.parse(localStorage.getItem("time")) || {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
    }
  );

  return (
    <>
      <Header setSettings={setSettings} setTasksModal={setTasksModal} />
      <Timer initialTime={initialTime} />
      <SettingModal
        settings={settings}
        setSettings={setSettings}
        initialTime={initialTime}
        setInitialTime={setInitialTime}
      />
      <TasksModal
        tasksModal={tasksModal}
        setTasksModal={setTasksModal}
        storage={storage}
        setStorage={setStorage}
      />
    </>
  );
}

export default App;
