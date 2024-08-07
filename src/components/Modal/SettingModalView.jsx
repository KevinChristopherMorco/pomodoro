import React from "react";
import Theme from "./ModalViews/Theme";
import Time from "./ModalViews/Time";

const ModalView = ({ view, initialTime, setInitialTime }) => {
  return (
    <>
      <Theme view={view} />
      <Time
        view={view}
        initialTime={initialTime}
        setInitialTime={setInitialTime}
      />
    </>
  );
};

export default ModalView;
