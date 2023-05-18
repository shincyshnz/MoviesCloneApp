import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {
    handleSetLocalStorage,
    handleGetLocalStorage,
    handleRemoveLocalStorage,
  } = useLocalStorage();

  const [isAuth, setIsAuth] = useState(false);
  const Token = { key: "Token", value: "logged" };

  useEffect(() => {
    const token = handleGetLocalStorage(Token.value);
    token == "" && setIsAuth(false);
  }, []);

  const login = (username, password) => {
    if (username === "test" && password == "test") {
      handleSetLocalStorage(Token.value, Token.value);
      setIsAuth(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    handleRemoveLocalStorage(Token.value);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Auth
export const useAuth = () => {
  return useContext(AuthContext);
};
