import { useContext } from "react";
import { StorageContext } from "../../LocalStorageProvider";

const useDeleteTask = (initialTask) => {
  const getStorageContext = useContext(StorageContext);
  const { storage, setStorage } = getStorageContext;
  const { id } = initialTask;

  const handleDelete = () => {
    setStorage(storage.filter((x) => x.id !== id));
  };
  return { handleDelete };
};

export default useDeleteTask;
