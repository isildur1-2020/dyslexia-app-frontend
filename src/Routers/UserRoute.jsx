import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const UserRoute = ({ children }) => {
  const { isAuth, isAdmin } = useSelector((s) => s?.userState);
  if (!isAuth || isAdmin) return <Navigate to="/login" />;
  return children;
};
