import React from "react";
import Theme from "./Theme";
import Time from "./Time";
import Audio from "./Audio";

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
