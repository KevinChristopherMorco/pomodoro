import logo from "./logo.svg";
import "./App.css";

import Timer from "./components/Timer";
import Header from "./components/Header";
import SettingModal from "./components/Modal/SettingModal";
import TasksModal from "./components/Modal/TasksModal";

import useToggleModal from "./hooks/useToggleModal";
import { useState, useEffect } from "react";

function App() {
  document.body.classList.add("twilight");
  const [settings, setSettings] = useState(false);
  const [tasksModal, setTasksModal] = useState(false);

  const { modalType, setToggle, setModalType } = useToggleModal();

  return (
    <>
      <Header setToggle={setToggle} />
      <Timer />
      <SettingModal
        settings={settings}
        setModalType={setModalType}
        modalType={modalType}
      />
      <TasksModal setModalType={setModalType} modalType={modalType} />
    </>
  );
}

export default App;
