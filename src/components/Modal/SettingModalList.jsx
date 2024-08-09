import React from "react";

const ModalList = ({ currentView, setActive }) => {
  return (
    <>
      <ul className="flex flex-col gap-y-4 text-sm font-medium">
        <li
          className={`px-1 py-2 cursor-pointer text-center rounded ${
            currentView === "theme" || currentView === null
              ? "bg-[var(--accent-color)] text-white font-bold"
              : "bg-transparent"
          }`}
          id="theme"
          onClick={setActive}
        >
          Theme
        </li>
        <li
          className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
            currentView === "timer"
              ? "bg-[var(--accent-color)] text-white font-bold"
              : "bg-transparent"
          }`}
          id="timer"
          onClick={setActive}
        >
          Timer
        </li>
        <li
          className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
            currentView === "sound"
              ? "bg-[var(--accent-color)] text-white font-bold"
              : "bg-transparent"
          }`}
          id="sound"
          onClick={setActive}
        >
          Sounds
        </li>
      </ul>
    </>
  );
};

export default ModalList;
