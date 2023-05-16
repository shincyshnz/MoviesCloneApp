import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { handleSetLocalStorage, handleGetLocalStorage } = useLocalStorage();

  const [auth, setAuth] = useState("");
  const authToken = uuidV4();

  useEffect(() => {
    const token = handleGetLocalStorage("Token");
    token == "" && setAuth(false);
  }, []);

  const login = (username, password) => {
    if (username === "test" && password == "test") {
      handleSetLocalStorage("Token", authToken);
      setAuth(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("Token");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
