<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from "react";
=======
import React, { createContext, useEffect, useState } from "react";
>>>>>>> a9a40e8 (bug fix : Logout)
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {
    handleSetLocalStorage,
    handleGetLocalStorage,
    handleRemoveLocalStorage,
  } = useLocalStorage();

<<<<<<< HEAD
  const [isAuth, setIsAuth] = useState(false);
  const Token = { key: "Token", value: "logged" };
=======
  const [auth, setAuth] = useState("");
  const authToken = "logged";
>>>>>>> a9a40e8 (bug fix : Logout)

  useEffect(() => {
    const token = handleGetLocalStorage(Token.value);
    token == "" && setIsAuth(false);
  }, []);

  const login = (username, password) => {
    if (username === "test" && password == "test") {
      handleSetLocalStorage(Token.key, Token.value);
      setIsAuth(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
<<<<<<< HEAD
    handleRemoveLocalStorage(Token.key);
    setIsAuth(false);
=======
    localStorage.removeItem("Token");
    setAuth(false);
>>>>>>> a9a40e8 (bug fix : Logout)
    return true;
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
