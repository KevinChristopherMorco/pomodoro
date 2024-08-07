import React from "react";

const Tasks = ({ title, note, totalPomodoro }) => {
  return (
    <div className="p-3 flex bg-[var(--secondary-color)] rounded-lg">
      <div className="basis-[70%]">
        <h4 className="font-medium">{title}</h4>
        <div>{note}</div>
      </div>
      <div className="flex justify-end gap-x-4 items-center basis-[30%] text-xl font-medium">
        <h4 className="text-base">0/{totalPomodoro}</h4>
        <div className="flex items-center text-lg text-[var(--accent-color)] cursor-pointer">
          <ion-icon name="create-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
