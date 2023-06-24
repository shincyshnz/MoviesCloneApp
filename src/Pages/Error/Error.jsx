import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useError } from "../../context/ErrorContext";

export const Error = () => {
  const { theme } = useTheme();
  const { errorObj, handleErrorObj } = useError();

  return (
    <>
      <div className={`theme-${theme}`}>{errorObj && <h1>{errorObj}</h1>}</div>
    </>
  );
};
