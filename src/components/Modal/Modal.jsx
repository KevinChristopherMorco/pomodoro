import React, { useState } from "react";
import ModalView from "./ModalView";
import ModalList from "./ModalList";

const Modal = ({
  modal,
  setModal,
  setMinutes,
  initialTime,
  setInitialTime,
}) => {
  const [view, setView] = useState(null);

  const handleView = (event) => {
    const { id } = event.target;
    setView(id);
  };
  return (
    <div
      className={`h-full w-full bg-black bg-opacity-50 absolute ${
        modal ? "flex items-center" : "hidden"
      }`}
    >
      <div className="w-[95%] mx-auto px-2 py-4 flex flex-col gap-y-10 bg-[var(--primary-color)] rounded-lg">
        <div className="px-2 flex justify-between items-center">
          <h6 className="text-lg font-bold">Customize Settings</h6>
          <div
            className="w-fit py-2 flex items-center self-end text-2xl cursor-pointer"
            onClick={() => setModal(false)}
          >
            <ion-icon name="close-circle-outline"></ion-icon>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="basis-[30%]">
            <ModalList handleView={handleView} />
          </div>
          <div className="basis-[60%]">
            <ModalView
              view={view}
              setMinutes={setMinutes}
              initialTime={initialTime}
              setInitialTime={setInitialTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
