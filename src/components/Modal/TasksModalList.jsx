import React, { useState } from "react";

const TasksModalList = ({ currentView, handleView }) => {
  return (
    <ul className="flex flex-col gap-y-4 font-medium">
      <li
        className={`px-1 py-2 cursor-pointer text-center rounded ${
          currentView === "addTask" || currentView === null
            ? "bg-[var(--accent-color)] text-white"
            : "bg-transparent"
        }`}
        id="addTask"
        onClick={handleView}
      >
        Add Task
      </li>
      <li
        className={`px-1 py-2 cursor-pointer text-center rounded ${
          currentView === "viewTask"
            ? "bg-[var(--accent-color)] text-white"
            : "bg-transparent"
        }`}
        id="viewTask"
        onClick={handleView}
      >
        View Task
      </li>
    </ul>
  );
};

export default TasksModalList;
