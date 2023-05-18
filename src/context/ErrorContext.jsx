import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errorObj, setErrorObj] = useState({});

  const handleErrorObj = (errKey, errMsg) => {
    setErrorObj((prev) => ({
      ...prev,
      [errKey]: errMsg,
    }));
  };

  return (
    <ErrorContext.Provider value={{ errorObj, handleErrorObj }}>
      {children}
    </ErrorContext.Provider>
  );
};

//custom hook
export const useError = () => {
  return useContext(ErrorContext);
};
