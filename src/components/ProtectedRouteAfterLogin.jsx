import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";
import { AuthContext } from "../context/AuthContext";

const ProtectedRouteAfterLogin = ({ children }) => {
  const { handleGetLocalStorage } = useLocalStorage();

  const data = handleGetLocalStorage("Token");
  if (data) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRouteAfterLogin;
