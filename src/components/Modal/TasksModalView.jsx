import React from "react";
import AddTask from "./TaskViews/AddTask";
import ViewTask from "./TaskViews/ViewTask";
import useListActive from "../../hooks/useListActive";

const TasksModalView = ({ currentView }) => {
  return (
    <>
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
              ? "h-full overflow-scroll flex flex-wrap content-between gap-y-5"
              : "hidden"
          }`}
        >
          <ViewTask />
        </div>
      </div>
    </>
  );
};

export default TasksModalView;
