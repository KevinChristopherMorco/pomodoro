import React, { useState, useContext } from "react";
import Tasks from "../../DynamicTemplates/Tasks";

import useLocalStorage from "../../../hooks/useLocalStorage";
import { StorageContext } from "../../../hooks/LocalStorageProvider";

const ViewTask = () => {
  // const { storage } = useLocalStorage();
  const getStorageContext = useContext(StorageContext);
  const { storage } = getStorageContext;

  return (
    <>
      {storage.map(({ id, title, note, totalPomodoro }) => {
        return (
          <Tasks
            key={id}
            id={id}
            title={title}
            note={note}
            totalPomodoro={totalPomodoro}
          />
        );
      })}
    </>
  );
};

export default ViewTask;
