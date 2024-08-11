import { useState, useEffect, useContext, createContext } from "react";

// const useLocalStorage = () => {
//   const StorageView = createContext(null);

//   const [storage, setStorage] = useState(
//     JSON.parse(localStorage.getItem("tasks")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(storage));
//   }, [storage]);

//   return { storage, setStorage };
// };

// export default useLocalStorage;

const useLocalStorage = () => {
  // const [storage, setStorage] = useState(
  //   JSON.parse(localStorage.getItem("tasks")) || []
  // );
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(storage));
  // }, [storage]);
  // return { storage, setStorage };
};

export default useLocalStorage;
