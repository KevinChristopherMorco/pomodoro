import React, { useState } from "react";
import useEditTask from "../../hooks/useEditTask";
import { useEffect } from "react";

const Tasks = ({ id, title, note, totalPomodoro }) => {
  const [hover, setHover] = useState(false);
  const initialTask = { id, title, note, totalPomodoro };

  const { tasks, edit, setEdit, handleInput, handleSubmit, handleDelete } =
    useEditTask(initialTask);

  return (
    <div
      className="w-full p-3 flex flex-col gap-y-4 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-[var(--primary-color)] rounded-lg cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between">
        <div
          className={`flex flex-col gap-y-4 ${
            edit ? "basis-[40%]" : "basis-[70%]"
          } `}
        >
          {edit ? (
            <input
              className="w-full px-4 py-2 border border-[var(--secondary-color)] text-sm bg-transparent rounded"
              placeholder="Think of a title..."
              name="title"
              value={tasks.title}
              onChange={handleInput}
            />
          ) : (
            <h4 className="font-medium">{title}</h4>
          )}

          {edit ? (
            <textarea
              className="px-4 py-2 border border-[var(--secondary-color)] text-sm bg-transparent rounded"
              name="note"
              placeholder="Add your note"
              value={tasks.note}
              onChange={handleInput}
            ></textarea>
          ) : (
            <div>{note}</div>
          )}
        </div>
        <div className="flex justify-end gap-x-4 basis-[30%] text-xl font-medium">
          <h4 className="text-base">0/{totalPomodoro}</h4>
        </div>
      </div>
      <div
        className={`transition ${
          hover
            ? "w-full opacity-100 flex justify-between items-center"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center text-[var(--secondary-color)]">
          <ion-icon name="alarm-outline"></ion-icon>
        </div>
        <div
          className={` text-lg text-[var(--secondary-color)] ${
            hover ? "flex gap-x-4 items-center" : "hidden"
          }`}
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={edit ? () => setEdit(false) : handleDelete}
          >
            {edit ? (
              <ion-icon name="close-circle-outline"></ion-icon>
            ) : (
              <ion-icon name="trash-outline"></ion-icon>
            )}
          </div>
          <div
            className={`flex items-center cursor-pointer`}
            onClick={edit ? handleSubmit : () => setEdit(true)}
          >
            {edit ? (
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            ) : (
              <ion-icon name="create-outline"></ion-icon>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
