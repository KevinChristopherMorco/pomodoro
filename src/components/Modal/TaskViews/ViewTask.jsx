import React, { useState } from "react";
import Tasks from "../../DynamicTemplates/Tasks";

import useLocalStorage from "../../../hooks/useLocalStorage";

const ViewNote = () => {
  const { storage } = useLocalStorage();
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

export default ViewNote;
