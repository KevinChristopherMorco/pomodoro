import React, { useState } from "react";
import { useEffect } from "react";

const Tasks = ({ id, title, note, totalPomodoro, storage, setStorage }) => {
  const [hover, setHover] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleDelete = () => {
    setStorage(storage.filter((x) => x.id !== id));
  };

  const [tasks, setTasks] = useState({
    title: title,
    note: note,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    const { title, note } = tasks;
    setStorage(
      storage.map((task) => {
        return task.id === id ? { ...task, title: title, note: note } : task;
      })
    );
    setEdit(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(storage));
  }, [storage]);
  return (
    <div
      className="p-3 flex flex-col gap-y-4 shadow-sm shadow-[var(--secondary-color)] border border-[var(--secondary-color)] bg-[var(--primary-color)] rounded-lg"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-4 basis-[40%]">
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
          hover ? "w-fit opacity-100 self-end" : "opacity-0 invisible"
        }`}
      >
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
