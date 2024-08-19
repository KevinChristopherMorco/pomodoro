import React, { useContext, useState } from "react";
import Tasks from "../../../DynamicTemplates/Tasks";

import { useStorageContext } from "../../../../hooks/storage/LocalStorageProvider";
import { useActiveTask } from "../../../../hooks/Providers/TaskActiveProvider";

const ViewTask = ({ currentView }) => {
  const { storage } = useStorageContext();
  const { setTimerTask, activeId } = useActiveTask();
  const { list } = currentView;

  const emptyTask = () => {
    return (
      <div className="w-full py-2 flex justify-center items-center gap-x-1 text-2xl text-[var(--text-color)] italic font-bold">
        <ion-icon name="clipboard-outline"></ion-icon>
        <p className="text-base">No tasks to display</p>
      </div>
    );
  };

  const viewTask = () => {
    return storage.map((initialTask) => {
      const { id: tasksIds, status } = initialTask;
      const { id: activeIds } = activeId;
      return (
        <Tasks
          key={tasksIds}
          initialTask={initialTask}
          active={tasksIds === activeIds}
          setTimerTask={setTimerTask}
          status={status}
        />
      );
    });
  };

  return (
    <div
      className={`transition-opacity ${
        list === "viewTask" ? "h-[25rem] opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`${
          list === "viewTask"
            ? "h-full overflow-scroll flex flex-wrap content-start gap-y-5"
            : "hidden"
        }`}
      >
        {storage.length === 0 ? emptyTask() : viewTask()}
      </div>
    </div>
  );
};

export default ViewTask;
