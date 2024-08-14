import React from "react";
import AddTask from "./AddTask";
import ViewTask from "./ViewTask";

import { StorageContextProvider } from "../../../../hooks/storage/LocalStorageProvider";

const TasksModalView = ({ currentView }) => {
  return (
    <>
      <StorageContextProvider>
        <div
          className={`transition-opacity ${
            currentView === "addTask" || currentView === null
              ? "h-fit opacity-100"
              : "opacity-0"
          }`}
        >
          <div
            className={`${
              currentView === "addTask" || currentView === null
                ? "h-full flex flex-wrap content-between gap-y-5"
                : "hidden"
            }`}
          >
            <AddTask />
          </div>
        </div>
        <div
          className={`transition-opacity ${
            currentView === "viewTask" ? "h-[25rem] opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`${
              currentView === "viewTask"
                ? "h-full overflow-scroll flex flex-wrap content-start gap-y-5"
                : "hidden"
            }`}
          >
            <ViewTask />
          </div>
        </div>
      </StorageContextProvider>
    </>
  );
};

export default TasksModalView;
