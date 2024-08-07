import React from "react";

const ModalList = ({ handleView }) => {
  return (
    <>
      <ul className="flex flex-col gap-y-4 text-lg font-medium">
        <li className="cursor-pointer" id="theme" onClick={handleView}>
          Theme
        </li>
        <li className="cursor-pointer" id="timer" onClick={handleView}>
          Timer
        </li>
        <li className="cursor-pointer" id="sound" onClick={handleView}>
          Sounds
        </li>
      </ul>
    </>
  );
};

export default ModalList;
