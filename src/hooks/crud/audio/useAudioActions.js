import { useState, useEffect } from "react";
import { useTimeContext } from "../../Providers/TimeProvider";

import alarmBeep from "../../../sounds/alarmBeep.mp3";
import carAlarm from "../../../sounds/carAlarm.mp3";
import mrClown from "../../../sounds/mrClown.mp3";

const useAudio = () => {
  const {
    timerCount: { alarm },
  } = useTimeContext();

  const [audioSrc, setAudioSrc] = useState(() => {
    const storedSound = localStorage.getItem("sound");
    const { sound } = storedSound ? JSON.parse(storedSound) : {};
    const audioChoice = {
      alarmBeep,
      carAlarm,
      mrClown,
    };
    return audioChoice[sound] || alarmBeep;
  });

  const [audio, setAudio] = useState(() => new Audio(audioSrc));

  useEffect(() => {
    const { sound } = localStorage.getItem("sound")
      ? JSON.parse(localStorage.getItem("sound"))
      : {};
    const audioChoice = {
      alarmBeep,
      carAlarm,
      mrClown,
    };

    setAudioSrc(audioChoice[sound] || alarmBeep);
    setAudio(new Audio(audioChoice[sound] || alarmBeep));

    stopAudio();
  }, [alarm]);

  const playAudio = () => {
    audio.loop = true;
    audio.play();
  };

  const stopAudio = () => {
    audio.loop = false;
    audio.pause();
    audio.currentTime = 0;
  };

  return { playAudio, stopAudio };
};

export default useAudio;
