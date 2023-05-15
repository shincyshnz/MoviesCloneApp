import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }
  console.log(auth);
  return <Outlet />;
};

export default ProtectedRoute;
