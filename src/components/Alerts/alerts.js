import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timerProgressBar: true,
  customClass: {
    popup: "!bg-[var(--secondary-color)] !text-[var(--text-accent-color)]",
  },
});

const successAlert = (customMessage) => {
  const { title } = customMessage;
  return Toast.fire({
    title,
    width: "70%",
    icon: "success",
    iconColor: "green",
    timer: 2000,
  });
};

const errorAlert = () => {
  return Toast.fire({
    title: "Invalid inputs detected!",
    text: "Make sure to put valid inputs.",
    width: "100%",
    icon: "error",
    iconColor: "red",
    timer: 3500,
  });
};

const confirmationAlert = (customMessage, confimationFunction) => {
  const { title, text } = customMessage;
  return Swal.fire({
    title,
    text,
    icon: "warning",
    iconColor: "orange",
    allowOutsideClick: false,
    showCancelButton: true,
    reverseButtons: true,
    customClass: {
      confirmButton: "bg-[var(--accent-color)]",
      cancelButton: "bg-[var(--secondary-color)]",
    },
  }).then((userAction) => {
    if (userAction.isConfirmed) {
      confimationFunction();
    }
  });
};

export { successAlert, errorAlert, confirmationAlert };
