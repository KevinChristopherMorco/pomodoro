import React from "react";
import Theme from "./ModalViews/SettingViews/Theme";
import Time from "./ModalViews/SettingViews/Time";

const ModalView = ({ currentView }) => {
  return (
    <>
      <Theme currentView={currentView} />
      <Time currentView={currentView} />
    </>
  );
};

export default ModalView;
