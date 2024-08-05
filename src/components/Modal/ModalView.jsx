import React, { useEffect, useState } from "react";

const ModalView = ({ view }) => {
  const [time, setTime] = useState({
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("time", JSON.stringify(time));
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setTime((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <form
        className={`${
          view === "theme" || view === null ? "flex flex-col gap-y-4" : "hidden"
        }`}
        onSubmit={handleSubmit}
      >
        <h6 className="font-medium">Select Theme</h6>
        <select name="" id="" className="w-full p-1 border border-accent">
          <option value="">Some theme1</option>
          <option value="">Some theme2</option>
        </select>
        <input
          type="submit"
          className="w-fit px-4 py-2 self-end bg-accent text-white rounded-lg"
          value="Save"
        ></input>
      </form>
      <form
        className={`${view === "timer" ? "flex flex-col gap-y-4" : "hidden"}`}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="pomodoro" className="font-medium">
            Pomodoro
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-accent rounded"
            id="pomodoro"
            name="pomodoro"
            onChange={onChange}
          />
          <p>minutes</p>
        </div>
        <div>
          <label htmlFor="pomodoro" className="font-medium">
            Short Break
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-accent rounded"
            id="shortBreak"
            name="shortBreak"
            onChange={onChange}
          />
          <p>minutes</p>
        </div>
        <div>
          <label htmlFor="pomodoro" className="font-medium">
            Long Break
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-accent rounded"
            id="longBreak"
            name="longBreak"
            onChange={onChange}
          />
          <p>minutes</p>
        </div>
        <input
          type="submit"
          className="w-fit px-4 py-2 self-end bg-accent text-white rounded-lg"
          value="Save"
        ></input>
      </form>
    </>
  );
};

export default ModalView;
