import React from "react";

const Theme = ({ currentView }) => {
  return (
    <div
      className={`transition-opacity delay-75 ${
        currentView === "theme" || currentView === null
          ? "h-full opacity-100"
          : "opacity-0"
      }`}
    >
      <form
        className={`${
          currentView === "theme" || currentView === null
            ? "h-full flex flex-wrap content-between"
            : "hidden"
        }`}
      >
        <div className="w-full flex flex-col gap-y-2">
          <h6 className="font-medium">Select Theme</h6>
          <select
            name=""
            id=""
            className="w-full p-1 border border-[var(--secondary-color)] bg-transparent"
          >
            <option value="">Classic</option>
            <option value="">Twilight</option>
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

export default Theme;
