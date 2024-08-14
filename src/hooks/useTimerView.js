const useTimerView = (setType, setAction) => {
  const setTimerView = (type, action) => {
    setType(type);
    setAction(action);
  };

  return { setTimerView };
};

export default useTimerView;
