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
      {storage.map((initialTask) => {
        const { id } = initialTask;
        return <Tasks key={id} initialTask={initialTask} />;
      })}
    </>
  );
};

export default ViewTask;
