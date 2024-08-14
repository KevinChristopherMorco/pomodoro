import logo from "./logo.svg";
import "./App.css";

import Timer from "./components/Timer";
import Header from "./components/Partials/Header";
import SettingModal from "./components/Modal/SettingModal";
import TasksModal from "./components/Modal/TasksModal";

import useToggleModal from "./hooks/useToggleModal";
import { useState } from "react";
import { TimerProvider } from "./hooks/TimeProvider";
import {
  TaskActiveProvider,
  CurrentViewProvider,
} from "./hooks/TaskActiveProvider";

function App() {
  // document.body.classList.add("twilight");
  const [settings, setSettings] = useState(false);
  const { modalType, setToggle, setModalType } = useToggleModal();

  return (
    <>
      <Header setToggle={setToggle} />
      <TimerProvider>
        <TaskActiveProvider>
          <CurrentViewProvider>
            <Timer />
            <SettingModal
              settings={settings}
              setModalType={setModalType}
              modalType={modalType}
            />
          </CurrentViewProvider>

          <TasksModal setModalType={setModalType} modalType={modalType} />
        </TaskActiveProvider>
      </TimerProvider>
    </>
  );
}

export default App;
