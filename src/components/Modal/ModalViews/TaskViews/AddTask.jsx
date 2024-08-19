import React, { useState, useEffect } from "react";
import useAddTask from "../../../../hooks/crud/tasks/useAddTask";

const AddNote = ({ currentView }) => {
  const [viewNotes, setViewNotes] = useState(false);
  const {
    tasks: { title, note, totalPomodoro },
    handleInput,
    handleSubmit,
  } = useAddTask();
  const { list } = currentView;
  return (
    <div
      className={`transition-opacity ${
        list === "addTask" || list === null ? "h-fit opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`${
          list === "addTask" || list === null
            ? "h-full flex flex-wrap content-between gap-y-5"
            : "hidden"
        }`}
      >
        <div className="w-full flex flex-col gap-y-2">
          <h6 className="font-medium">Task Name:</h6>

          <input
            type="text"
            name="title"
            className="w-full px-4 py-3 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-transparent border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)]  rounded"
            placeholder="Do you have any tasks in mind?"
            onChange={handleInput}
            value={title}
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h6 className="font-medium">No. of Pomodoros:</h6>
          <input
            type="number"
            name="totalPomodoro"
            id=""
            className="w-[40%] px-4 py-2 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-transparent border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded"
            onChange={handleInput}
            value={totalPomodoro}
          />
        </div>
        <div
          className="w-fit flex items-center gap-x-2 font-medium cursor-pointer"
          onClick={() => setViewNotes(!viewNotes)}
        >
          <ion-icon name="newspaper-outline"></ion-icon>
          <p>Add a note</p>
        </div>
        <div
          className={`transition ${
            viewNotes ? "w-full opacity-100" : "opacity-0"
          }`}
        >
          <div className={` ${viewNotes ? "flex flex-col gap-y-2" : "hidden"}`}>
            <h6 className="font-medium">Custom Note:</h6>
            <textarea
              name="note"
              id=""
              className="w-[100%] px-4 py-2 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-transparent border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded"
              placeholder="Think of a meaningful note..."
              maxLength={90}
              onChange={handleInput}
              value={note}
            />
          </div>
        </div>
        <div className="w-full pt-4 mt-4 flex justify-end border-t border-[var(--secondary-color)]">
          <button
            className="w-fit px-4 py-2 bg-[var(--accent-color)] text-white rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
