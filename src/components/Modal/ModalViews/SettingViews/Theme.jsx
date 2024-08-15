import React from "react";
import useTheme from "../../../../hooks/useTheme";

const Theme = ({ currentView }) => {
  const { handleTheme, onThemeChange } = useTheme();

  return (
    <div
      className={`transition-opacity delay-75 ${
        currentView === "theme" || currentView === null
          ? "h-full opacity-100"
          : "opacity-0"
      }`}
    >
      <form
        onSubmit={handleTheme}
        className={`${
          currentView === "theme" || currentView === null
            ? "h-full flex flex-wrap content-between"
            : "hidden"
        }`}
      >
        <div className="w-full flex flex-col gap-y-2">
          <h6 className="font-medium">Theme</h6>
          <select
            name=""
            id=""
            onChange={onThemeChange}
            className="w-full p-2 text-sm text-[var(--text-color)] shadow-sm shadow-[var(--secondary-color)] bg-[var(--primary-color)] border border-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] rounded cursor-pointer"
          >
            <option value="classic">Classic</option>
            <option value="sunburst">Sunset Breeze</option>
            <option value="twilight">Twilight</option>
            <option value="nightfall">Nightfall</option>
          </select>
          <p className="text-[0.80rem] font-light italic">
            Choose from the lightest theme down to the darkest theme.
          </p>
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
