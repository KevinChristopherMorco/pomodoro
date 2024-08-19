import React from "react";
import AddTask from "./ModalViews/TaskViews/AddTask";
import ViewTask from "./ModalViews/TaskViews/ViewTask";

import { StorageContextProvider } from "../../hooks/storage/LocalStorageProvider";

const TasksModalView = ({ currentView }) => {
  return (
    <>
      <StorageContextProvider>
        <AddTask currentView={currentView} />
        <ViewTask currentView={currentView} />
      </StorageContextProvider>
    </>
  );
};

export default TasksModalView;
