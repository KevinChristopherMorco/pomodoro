import useAudio from "./useAudio";

const useTimerView = (setType, setAction) => {
  const { playAudio } = useAudio();
  const setTimerView = (type, action) => {
    setType(type);
    setAction(action);
    playAudio();
  };

  return { setTimerView };
};

export default useTimerView;
