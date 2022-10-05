import React from "react";
import { Navigate } from "react-router-dom";

export const OnlyAdminRoute = ({ children }) => {
  if (false) return <Navigate to="/login" />;
  return children;
};
