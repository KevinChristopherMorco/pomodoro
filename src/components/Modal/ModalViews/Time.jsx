import React from "react";

const Time = ({ view, initialTime, setInitialTime }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("time", JSON.stringify(initialTime));
    setInitialTime(initialTime);
    console.log(initialTime);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInitialTime((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div
      className={`transition-opacity delay-75 ${
        view === "timer" ? "opacity-100" : "opacity-0"
      }`}
    >
      <form
        className={`${view === "timer" ? "flex flex-col gap-y-4" : "hidden"}`}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Pomodoro
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-[var(--secondary-color)] bg-transparent rounded"
            id="pomodoro"
            name="pomodoro"
            onChange={onChange}
            value={initialTime.pomodoro}
          />
          <p>minutes</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Long Break
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-[var(--secondary-color)] bg-transparent rounded"
            id="longBreak"
            name="longBreak"
            onChange={onChange}
            value={initialTime.longBreak}
          />
          <p>minutes</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="pomodoro" className="font-medium">
            Short Break
          </label>
          <input
            type="number"
            className="px-2 py-1 border border-[var(--secondary-color)] bg-transparent rounded"
            id="shortBreak"
            name="shortBreak"
            onChange={onChange}
            value={initialTime.shortBreak}
          />
          <p>minutes</p>
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

export default Time;
