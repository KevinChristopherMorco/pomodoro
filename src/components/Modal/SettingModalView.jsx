import React from "react";
import Theme from "./ModalViews/Theme";
import Time from "./ModalViews/Time";

const ModalView = ({ currentView }) => {
  return (
    <>
      <Theme currentView={currentView} />
      <Time currentView={currentView} />
    </>
  );
};

export default ModalView;
