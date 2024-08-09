import { useState } from "react";

const useToggleModal = () => {
  const [modalType, setModalType] = useState(null);

  const setToggle = (event) => {
    const { id } = event.currentTarget;

    switch (id) {
      case "settings-modal":
        setModalType(id);
        break;
      case "tasks-modal":
        setModalType(id);
        break;
      default:
        break;
    }
  };

  return { modalType, setModalType, setToggle };
};

export default useToggleModal;
