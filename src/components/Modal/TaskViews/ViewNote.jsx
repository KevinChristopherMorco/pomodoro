import React, { useState } from "react";
import Tasks from "../../DynamicTemplates/Tasks";

const ViewNote = () => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  return (
    <>
      {storage.map(({ title, note, totalPomodoro }) => {
        return (
          <Tasks title={title} note={note} totalPomodoro={totalPomodoro} />
        );
      })}
    </>
  );
};

export default ViewNote;
