import React from "react";
import Theme from "./ModalViews/SettingViews/Theme";
import Time from "./ModalViews/SettingViews/Time";
import Audio from "./ModalViews/SettingViews/Audio";

const SettingModalView = ({ currentView }) => {
  return (
    <>
      <Theme currentView={currentView} />
      <Time currentView={currentView} />
      <Audio currentView={currentView} />
    </>
  );
};

export default SettingModalView;
