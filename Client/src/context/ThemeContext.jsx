import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const onChangeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for Theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
