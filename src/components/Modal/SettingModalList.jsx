import React from "react";
import useActive from "../../hooks/useActive";

const SettingModalList = ({ currentView, setActive }) => {
  const { list } = currentView;
  return (
    <>
      <ul className="flex flex-col gap-y-4 text-sm font-medium">
        <li
          className={`px-1 py-2 cursor-pointer text-center rounded ${
            list === "theme" || list === null
              ? "bg-[var(--accent-color)] text-white font-bold"
              : "bg-transparent"
          }`}
          id="theme"
          onClick={() => setActive("list", "theme")}
        >
          Theme
        </li>
        <li
          className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
            list === "timer"
              ? "bg-[var(--accent-color)] text-white font-bold"
              : "bg-transparent"
          }`}
          id="timer"
          onClick={() => setActive("list", "timer")}
        >
          Timer
        </li>
        <li
          className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
            list === "sound"
              ? "bg-[var(--accent-color)] text-white font-bold"
              : "bg-transparent"
          }`}
          id="sound"
          onClick={() => setActive("list", "sound")}
        >
          Sounds
        </li>
      </ul>
    </>
  );
};

export default SettingModalList;
