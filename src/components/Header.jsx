import React from "react";

const Header = ({ setToggle }) => {
  return (
    <nav className="px-4 py-6 flex justify-between">
      <div className="basis-[40%]">
        <h1 className="text-lg font-bold">Pomodoro</h1>
      </div>
      <div className="flex justify-between items-center text-xl basis-[35%]">
        <div
          className="flex gap-x-1 items-center cursor-pointer"
          id="tasks-modal"
          onClick={setToggle}
        >
          <ion-icon name="clipboard-outline"></ion-icon>
          <p className="text-sm font-medium">My Tasks</p>
        </div>
        <div
          className="flex items-center cursor-pointer"
          id="settings-modal"
          onClick={setToggle}
        >
          <ion-icon name="settings-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Header;
