import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import Tasks from "../DynamicTemplates/Tasks";
import TasksModalList from "./TasksModalList";
import TasksModalView from "./TasksModalView";

const TasksModal = ({ tasksModal, setTasksModal }) => {
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
        className={`h-full w-full flex justify-center bg-black bg-opacity-50 absolute ${
          tasksModal ? "flex items-center" : "hidden"
        }`}
      >
        <div className="w-[95%] px-2 py-4 flex flex-col gap-y-1 bg-[var(--primary-color)] top-5 absolute rounded-lg">
          <div
            className="pb-4 flex justify-between items-center border-b border-[var(--accent-color)] text-2xl"
            onClick={() => setTasksModal(false)}
          >
            <div>
              <h6 className="text-lg font-bold">Manage Tasks</h6>
            </div>
            <div className="cursor-pointer">
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
          </div>
          <div className="py-4 flex gap-y-2">
            <div className="basis-[30%]">
              <TasksModalList handleView={handleView} />
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
