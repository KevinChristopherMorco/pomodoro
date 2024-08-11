import React, { useState } from "react";

const TasksModalList = ({ currentView, setCurrentView }) => {
  return (
    <ul className="flex flex-col gap-y-4 font-medium">
      <li
        className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
          currentView === "addTask" || currentView === null
            ? "bg-[var(--accent-color)] text-white font-bold"
            : "bg-transparent"
        }`}
        id="addTask"
        onClick={() => setCurrentView("addTask")}
      >
        Add Task
      </li>
      <li
        className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
          currentView === "viewTask"
            ? "bg-[var(--accent-color)] text-white font-bold"
            : "bg-transparent"
        }`}
        id="viewTask"
        onClick={() => setCurrentView("viewTask")}
      >
        View Task
      </li>
    </ul>
  );
};

export default TasksModalList;
