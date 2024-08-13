import React, { useState } from "react";
import useEditTask from "../../hooks/crud/tasks/useEditTask";
import useDeleteTask from "../../hooks/crud/tasks/useDeleteTask";

const Tasks = ({ initialTask, active, setTimerTask, status }) => {
  const [hover, setHover] = useState(false);
  const { title, note, currentPomodoro, totalPomodoro } = initialTask;
  const { handleDelete } = useDeleteTask(initialTask);
  const { tasks, edit, setEdit, handleInputChange, handleTaskSubmit } =
    useEditTask(initialTask);

  return (
    <div
      className={`w-full p-3 flex flex-col gap-y-4 shadow-sm shadow-[var(--secondary-color)] border rounded-lg cursor-pointer ${
        active
          ? "border-[var(--accent-color)]"
          : "border-[var(--secondary-color)]"
      } ${
        status === "complete"
          ? "bg-[var(--secondary-color)]"
          : "bg-[var(--primary-color)]"
      }`}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            ></textarea>
          ) : (
            <div>{note}</div>
          )}
        </div>
        <div className="flex justify-end gap-x-4 basis-[30%] text-xl font-medium">
          <h4 className="text-base">
            {currentPomodoro}/{totalPomodoro}
          </h4>
        </div>
      </div>
      <div
        className={`transition ${
          hover ? `w-full opacity-100` : "opacity-0 invisible"
        } ${
          status !== "complete"
            ? "flex justify-between items-center"
            : "flex justify-end items-center"
        }`}
      >
        {status !== "complete" && (
          <div
            className="flex items-center text-[var(--accent-color)]"
            onClick={() => setTimerTask(initialTask.id)}
          >
            <ion-icon name="alarm-outline"></ion-icon>
            <p className="text-[0.75rem]">Enable</p>
          </div>
        )}
        <div
          className={` text-lg text-[var(--accent-color)] ${
            hover ? "flex gap-x-4 items-center" : "hidden invisible"
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
            onClick={edit ? handleTaskSubmit : () => setEdit(true)}
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
