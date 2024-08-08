import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import Tasks from "../DynamicTemplates/Tasks";
import TasksModalList from "./TasksModalList";
import TasksModalView from "./TasksModalView";

const TasksModal = ({ setStorage, storage, tasksModal, setTasksModal }) => {
  const [currentView, setCurrentView] = useState(null);

  const handleView = (event) => {
    const { id } = event.target;
    setCurrentView(id);
  };

  return (
    <div
      className={`transition ${
        tasksModal ? "h-full w-full absolute opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`h-full w-full bg-black bg-opacity-50 absolute ${
          tasksModal ? "flex items-start" : "hidden"
        }`}
      >
        <div className="w-[95%] my-5 mx-auto px-2 py-4 flex flex-col gap-y-1 bg-[var(--primary-color)] rounded-lg">
          <div className="pb-4 flex justify-between items-center border-b border-[var(--secondary-color)] text-2xl">
            <div>
              <h6 className="text-lg font-bold">Manage Tasks</h6>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setTasksModal(false)}
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
          </div>
          <div className="py-4 flex justify-between gap-y-2">
            <div className="basis-[25%]">
              <TasksModalList
                currentView={currentView}
                handleView={handleView}
              />
            </div>
            <div className="basis-[70%]">
              <TasksModalView
                currentView={currentView}
                storage={storage}
                setStorage={setStorage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksModal;
