import React, { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "classic"
  );
  const [input, setInput] = useState({ theme: "" });
  //set theme onload
  document.body.classList.add(theme);

  const handleTheme = (event) => {
    event.preventDefault();

    if (!Boolean(input)) return;

    const { theme } = input;
    document.body.classList = "";
    document.body.classList.add(theme);
    setTheme(theme);
  };

  const onThemeChange = (event) => {
    const { value } = event.target;
    setInput({ theme: value });
  };

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return { handleTheme, onThemeChange };
};

export default useTheme;
