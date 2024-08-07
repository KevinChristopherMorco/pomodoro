import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
const AddNote = () => {
  const [viewTask, setViewTask] = useState(false);
  const [viewNotes, setViewNotes] = useState(false);
  const [tasks, setTasks] = useState({
    id: "",
    title: "",
    note: "",
    totalPomodoro: 1,
    currentPomdoro: 0,
  });
  const [store, setStore] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleSubmit = () => {
    const submitTask = {
      ...tasks,
      id: `${uuid()}-${new Date().getTime()}`,
    };

    setStore((prev) => {
      return [...prev, submitTask];
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(store));
  }, [store]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <input
        type="text"
        name="title"
        className="w-full p-4 text-sm bg-transparent border border-[var(--accent-color)] rounded"
        placeholder="Do you have any tasks in mind?"
        onChange={handleInput}
      />
      <div className="flex flex-col gap-y-2">
        <h6 className="font-medium">No. of Pomodoros</h6>
        <input
          type="number"
          name="totalPomodoro"
          id=""
          className="w-[60%] py-2 px-4 p-1 border border-[var(--accent-color)] text-xl bg-transparent rounded"
          onChange={handleInput}
        />
      </div>
      <div
        className="w-fit flex items-center gap-x-2 font-medium cursor-pointer"
        onClick={() => setViewNotes(!viewNotes)}
      >
        <ion-icon name="newspaper-outline"></ion-icon>
        <p>Add a note</p>
      </div>
      <div className={`transition ${viewNotes ? "opacity-100" : "opacity-0"}`}>
        <div className={` ${viewNotes ? "flex flex-col gap-y-2" : "hidden"}`}>
          <h6 className="font-medium">Customized Notes</h6>
          <textarea
            name="note"
            id=""
            className="w-[100%] p-1 border border-[var(--accent-color)] text-xl bg-transparent rounded"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="pt-4 flex justify-between items-center border-t border-[var(--accent-color)]">
        <div
          className="w-fit flex items-center gap-x-2 font-medium cursor-pointer"
          onClick={() => setViewTask(!viewTask)}
        >
          <ion-icon name="eye-outline"></ion-icon>
          <p>View tasks</p>
        </div>
        <div>
          <button
            className="w-fit px-4 py-2 self-end bg-[var(--accent-color)] text-white rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
