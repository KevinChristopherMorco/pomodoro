import React from "react";
import AddNote from "./TaskViews/AddNote";
import ViewNote from "./TaskViews/ViewNote";

const TasksModalView = ({ setStorage, storage, currentView }) => {
  return (
    <>
      <div
        className={`transition-opacity ${
          currentView === "addTask" || currentView === null
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div
          className={`${
            currentView === "addTask" || currentView === null
              ? "flex flex-col gap-y-4"
              : "hidden"
          }`}
        >
          <AddNote />
        </div>
      </div>

      <div
        className={`transition-opacity ${
          currentView === "viewTask" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`${
            currentView === "viewTask"
              ? "h-[70vh] overflow-scroll flex flex-col gap-y-4"
              : "hidden"
          }`}
        >
          <ViewNote storage={storage} setStorage={setStorage} />
        </div>
      </div>
    </>
  );
};

export default TasksModalView;
