import React from "react";
import SettingModalView from "./ModalViews/SettingViews/SettingModalView";
import SettingModalList from "./SettingModalList";
import useListActive from "../../hooks/useListActive";

const Modal = ({ setModalType, setMinutes, modalType }) => {
  const { currentView, setCurrentView } = useListActive();

  return (
    <div
      className={`transition ${
        modalType === "settings-modal"
          ? "h-full w-full absolute opacity-100"
          : "opacity-0"
      }`}
    >
      <div
        className={`bg-black bg-opacity-50  ${
          modalType === "settings-modal"
            ? "h-full w-full flex items-start"
            : "hidden"
        }`}
      >
        <div className="w-[95%] mx-auto px-2 py-4 my-5 flex flex-col gap-y-10 bg-[var(--primary-color)] rounded-lg">
          <div className="px-2 pb-4 flex justify-between items-center border-b border-[var(--secondary-color)]">
            <h6 className="text-lg font-bold">Customize Settings</h6>
            <div
              className="w-fit py-2 flex items-center text-2xl cursor-pointer"
              onClick={() => setModalType(null)}
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="basis-[20%]">
              <SettingModalList
                currentView={currentView}
                setCurrentView={setCurrentView}
              />
            </div>
            <div className="basis-[70%]">
              <SettingModalView
                currentView={currentView}
                setMinutes={setMinutes}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
