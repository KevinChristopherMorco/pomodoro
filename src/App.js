import logo from "./logo.svg";
import "./App.css";

import Timer from "./components/Timer";
import Header from "./components/Header";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header setModal={setModal} />
      <Timer />
      <Modal modal={modal} setModal={setModal} />
    </>
  );
}

export default App;
