import { useState, useEffect } from "react";

const useAudioChange = () => {
  const [sound, setAudio] = useState(
    JSON.parse(localStorage.getItem("sound")) || { sound: "alarmBeep" }
  );
  const [input, setInput] = useState({ sound: sound });

  const handleSound = (event) => {
    event.preventDefault();

    if (!Boolean(input)) return;

    setAudio(input);
  };

  const onSoundChange = (event) => {
    const { value } = event.target;
    setInput({ sound: value });
  };

  useEffect(() => {
    localStorage.setItem("sound", JSON.stringify(sound));
  }, [sound]);

  return { handleSound, onSoundChange };
};

export default useAudioChange;
