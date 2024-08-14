import { useStorageContext } from "../../storage/LocalStorageProvider";

const useDeleteTask = (initialTask) => {
  const { storage, setStorage } = useStorageContext();
  const { id } = initialTask;

  const handleDelete = () => {
    setStorage(storage.filter((x) => x.id !== id));
  };
  return { handleDelete };
};

export default useDeleteTask;
