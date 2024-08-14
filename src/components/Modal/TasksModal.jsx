import React from "react";

import TasksModalList from "./TasksModalList";
import TasksModalView from "./ModalViews/TaskViews/TasksModalView";
import useListActive from "../../hooks/useListActive";

const TasksModal = ({ setModalType, modalType }) => {
  const { currentView, setCurrentView } = useListActive();
  return (
    <div
      className={`transition ${
        modalType === "tasks-modal"
          ? "h-full w-full absolute opacity-100"
          : "opacity-0"
      }`}
    >
      <div
        className={`h-full w-full bg-black bg-opacity-50 absolute ${
          modalType === "tasks-modal" ? "flex items-start" : "hidden"
        }`}
      >
        <div className="w-[95%] my-5 mx-auto px-2 py-4 flex flex-col gap-y-1 bg-[var(--primary-color)] rounded-lg">
          <div className="pb-4 flex justify-between items-center border-b border-[var(--secondary-color)] text-2xl">
            <div>
              <h6 className="text-lg font-bold">Manage Tasks</h6>
            </div>
            <div className="cursor-pointer" onClick={() => setModalType(null)}>
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
          </div>
          <div className="py-4 flex justify-between gap-y-2">
            <div className="basis-[25%]">
              <TasksModalList
                currentView={currentView}
                setCurrentView={setCurrentView}
              />
            </div>
            <div className="basis-[70%]">
              <TasksModalView currentView={currentView} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksModal;
