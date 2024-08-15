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
      className={`w-full p-3 flex flex-col gap-y-4 shadow-sm shadow-[var(--secondary-color)] rounded-lg cursor-pointer ${
        active
          ? "border-2 border-[var(--accent-color)]"
          : "border border-[var(--primary-color)]"
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

          {status === "complete" && (
            <div className="w-12 h-12 mx-1 flex justify-center items-center font-medium bg-[var(--accent-light-color)] border-2 border-[var(--accent-color)] rounded-full relative">
              <div className="w-[4rem] h-5 flex items-center border-[0.15rem] bg-[var(--accent-color)] border-[var(--accent-color)] -rotate-6 absolute rounded">
                <p className="w-full text-sm text-center text-[var(--text-accent)] font-bold">
                  Finished
                </p>
              </div>
            </div>
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
            className="flex items-center gap-x-1 text-[var(--text-color)]"
            onClick={() => setTimerTask(initialTask.id)}
          >
            <ion-icon name="alarm-outline"></ion-icon>
            <p className="text-[0.75rem]">Enable</p>
          </div>
        )}
        <div
          className={` text-lg text-[var(--text-color)] ${
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
