import React from "react";

const Header = () => {
  return (
    <nav className="px-4 py-6 flex justify-between">
      <div>
        <h1 className="text-lg font-bold">Pomodoro</h1>
      </div>
      <div className="text-xl">
        <ion-icon name="settings-outline"></ion-icon>
      </div>
    </nav>
  );
};

export default Header;
