import { useState, useRef, useEffect } from "react";

import alarmBeep from "../sounds/alarmBeep.mp3";
import { useTimeContext } from "./TimeProvider";

const useAudio = () => {
  // const [audio, setAudio] = useState(
  //   localStorage.getItem("audio") || { audio: "alarm_beep" }
  // );

  const { countdown } = useTimeContext();

  const audioRef = useRef(new Audio(alarmBeep));

  const playAudio = () => {
    audioRef.current.loop = true;
    audioRef.current.play();
  };

  const stopAudio = () => {
    audioRef.current.loop = false;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    stopAudio();
  }, [countdown]);

  return { playAudio, stopAudio };
};

export default useAudio;
