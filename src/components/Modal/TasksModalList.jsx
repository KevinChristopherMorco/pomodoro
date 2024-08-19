import React from "react";

const TasksModalList = ({ currentView, setActive }) => {
  const { list } = currentView;
  return (
    <ul className="flex flex-col gap-y-4 font-medium">
      <li
        className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
          list === "addTask" || list === null
            ? "bg-[var(--accent-color)] text-white font-bold"
            : "bg-transparent"
        }`}
        id="addTask"
        onClick={() => setActive("list", "addTask")}
      >
        Add Task
      </li>
      <li
        className={`px-1 py-2 cursor-pointer text-sm text-center rounded ${
          list === "viewTask"
            ? "bg-[var(--accent-color)] text-white font-bold"
            : "bg-transparent"
        }`}
        id="viewTask"
        onClick={() => setActive("list", "viewTask")}
      >
        View Task
      </li>
    </ul>
  );
};

export default TasksModalList;
