import React from "react";
import { Navigate } from "react-router-dom";

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem("tokenBinar");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default Protected;
