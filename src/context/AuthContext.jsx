import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const userData = {
      username: "test",
      password: "test",
    };

    localStorage.setItem("userData", JSON.stringify(userData));
  }, []);

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("userData");
    setAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
