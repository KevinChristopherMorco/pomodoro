import React from "react";
import Theme from "./Theme";
import Time from "./Time";

const SettingModalView = ({ currentView }) => {
  return (
    <>
      <Theme currentView={currentView} />
      <Time currentView={currentView} />
    </>
  );
};

export default SettingModalView;
