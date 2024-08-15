import { useStorageContext } from "../../storage/LocalStorageProvider";
import {
  successAlert,
  confirmationAlert,
} from "../../../components/Alerts/alerts";

const useDeleteTask = (initialTask) => {
  const { storage, setStorage } = useStorageContext();
  const { id } = initialTask;

  const handleDelete = () => {
    const customMessage = {
      title: "Delete a task?",
      text: "It cannot be undone!",
    };
    const deleteTask = () => {
      setStorage(storage.filter((x) => x.id !== id));
      successAlert("Task", "deleted");
    };
    confirmationAlert(customMessage, deleteTask);
  };

  return { handleDelete };
};

export default useDeleteTask;
