import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

const ProtectedRouteAfterLogin = () => {
  const { handleGetLocalStorage } = useLocalStorage();

  const data = handleGetLocalStorage("Token");
  if (data) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRouteAfterLogin;
