import React from "react";

const TasksModalList = ({ handleView }) => {
  return (
    <ul className="flex flex-col gap-y-4 font-medium">
      <li className="cursor-pointer" id="addTask" onClick={handleView}>
        Add Task
      </li>
      <li className="cursor-pointer" id="viewTask" onClick={handleView}>
        View Task
      </li>
    </ul>
  );
};

export default TasksModalList;
