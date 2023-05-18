import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    console.log(auth, "=== inside protectedRoute");
    return <Navigate to="/" replace />;
  }
  console.log(auth, "===outside protectedRoute");
  return <Outlet />;
};

export default ProtectedRoute;
