import React, { useContext, useState } from "react";
import Tasks from "../../../DynamicTemplates/Tasks";

import { StorageContext } from "../../../../hooks/storage/LocalStorageProvider";

import { TaskActiveContext } from "../../../../hooks/TaskActiveProvider";

const ViewTask = () => {
  const getStorageContext = useContext(StorageContext);
  const { storage } = getStorageContext;
  const getTaskActiveContext = useContext(TaskActiveContext);

  const { setTimerTask, activeId } = getTaskActiveContext;

  if (storage.length === 0) {
    return (
      <div className="w-full py-2 flex justify-center items-center gap-x-1 text-2xl text-[var(--text-color)] italic font-bold">
        <ion-icon name="clipboard-outline"></ion-icon>
        <p className="text-base">No tasks to display</p>
      </div>
    );
  }

  return (
    <>
      {storage.map((initialTask) => {
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
      })}
    </>
  );
};

export default ViewTask;
