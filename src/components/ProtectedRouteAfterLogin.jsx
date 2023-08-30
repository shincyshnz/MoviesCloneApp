import React, { useContext } from "react";
<<<<<<< HEAD
import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

const ProtectedRouteAfterLogin = () => {
=======
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";
import { AuthContext } from "../context/AuthContext";

const ProtectedRouteAfterLogin = ({ children }) => {
>>>>>>> a9a40e8 (bug fix : Logout)
  const { handleGetLocalStorage } = useLocalStorage();

  const data = handleGetLocalStorage("Token");
  if (data) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRouteAfterLogin;
