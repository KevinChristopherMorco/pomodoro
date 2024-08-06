import React from "react";

const Theme = ({ view }) => {
  return (
    <div
      className={`transition-opacity delay-75 ${
        view === "theme" || view === null ? "opacity-100" : "opacity-0"
      }`}
    >
      <form
        className={`${
          view === "theme" || view === null ? "flex flex-col gap-y-8" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-y-2">
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
        <input
          type="submit"
          className="w-fit px-4 py-2 self-end bg-[var(--accent-color)] text-white rounded-lg"
          value="Save"
        ></input>
      </form>
    </div>
  );
};

export default Theme;
