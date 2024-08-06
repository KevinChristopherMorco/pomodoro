import logo from "./logo.svg";
import "./App.css";

import Timer from "./components/Timer";
import Header from "./components/Header";
import Modal from "./components/Modal/Modal";
import { useState, useEffect } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [initialTime, setInitialTime] = useState(
    JSON.parse(localStorage.getItem("time")) || {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
    }
  );

  return (
    <>
      <Header setModal={setModal} />
      <Timer initialTime={initialTime} />
      <Modal
        modal={modal}
        setModal={setModal}
        initialTime={initialTime}
        setInitialTime={setInitialTime}
      />
    </>
  );
}

export default App;
