import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MyDrawer from "./drawer";
import useTokenVerification from "../utils/tokenVerification";

const RequireAuth = (props) => {
  const token = localStorage.getItem("token");
  const role = parseInt(localStorage.getItem("allowedRoles"));

  useTokenVerification(token, role, () => {});

  return props.allowedRoles.includes(role) && token ? (
    <MyDrawer Outlet={Outlet} />
  ) : token ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default RequireAuth;
