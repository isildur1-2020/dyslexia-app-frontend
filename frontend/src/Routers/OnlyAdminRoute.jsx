import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Navigate } from "react-router-dom";

export const OnlyAdminRoute = ({ children }) => {
  const { state } = useContext(MainContext);
  const { isAdminAuth } = state;
  if (!isAdminAuth) return <Navigate to="/login" />;
  return children;
};
