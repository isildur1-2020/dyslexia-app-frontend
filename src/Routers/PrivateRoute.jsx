import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  if (false) return <Navigate to="/login" />;
  if (false) return <Navigate to="/form" />;
  return children;
};
