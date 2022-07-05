import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { state } = useContext(MainContext);
  const { isAdminAuth, isUserAuth } = state;
  if (!isAdminAuth) return <Navigate to="/login" />;
  if (!isUserAuth) return <Navigate to="/form" />;
  return children;
};
