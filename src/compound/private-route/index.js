import React from "react";
import { getCurrentUser } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = useSelector(getCurrentUser);
  return user ? children : <Navigate to="/" />;
};
