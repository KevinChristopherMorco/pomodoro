import React from "react";

const Audio = ({ currentView }) => {
  return (
    <div
      className={`transition-opacity delay-75 ${
        currentView === "sound" ? "h-full opacity-100" : "opacity-0"
      }`}
    >
      <form
        className={`${
          currentView === "sound"
            ? "h-full flex flex-wrap content-between"
            : "hidden"
        }`}
      >
        <div className="w-full flex flex-col gap-y-2">
          <h6 className="font-medium">Alarm Sound</h6>
          <select
            name=""
            id=""
            className="w-full p-2 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] outline-1 outline-[var(--accent-color)] rounded cursor-pointer"
          >
            <option value="">Chimes</option>
            <option value="">Beep Sound</option>
          </select>
        </div>
        <div className="w-full pt-4 mt-4 flex justify-end border-t border-[var(--secondary-color)]">
          <input
            type="submit"
            className="w-fit px-4 py-2 self-end bg-[var(--accent-color)] text-white rounded-lg cursor-pointer"
            value="Save"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Audio;
