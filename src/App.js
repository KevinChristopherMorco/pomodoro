import logo from "./logo.svg";
import "./App.css";

import Timer from "./components/Timer";
import Header from "./components/Partials/Header";
import SettingModal from "./components/Modal/SettingModal";
import TasksModal from "./components/Modal/TasksModal";

import useActive from "./hooks/useActive";

import { TimerProvider } from "./hooks/Providers/TimeProvider";
import { TaskActiveProvider } from "./hooks/Providers/TaskActiveProvider";

function App() {
  const { currentView, setActive, clearActive } = useActive();
  const { modal } = currentView;

  return (
    <>
      <Header setActive={setActive} />
      <TimerProvider>
        <TaskActiveProvider>
          <Timer />
          <SettingModal clearActive={clearActive} modal={modal} />

          <TasksModal modal={modal} clearActive={clearActive} />
        </TaskActiveProvider>
      </TimerProvider>
    </>
  );
}

export default App;
