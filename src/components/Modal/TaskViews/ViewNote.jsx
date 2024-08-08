import React, { useState } from "react";
import Tasks from "../../DynamicTemplates/Tasks";

const ViewNote = ({ storage, setStorage }) => {
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
            storage={storage}
            setStorage={setStorage}
          />
        );
      })}
    </>
  );
};

export default ViewNote;
