import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = (props) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("allowedRoles");

  return props.allowedRoles.find((r) => r == role) && token ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default RequireAuth;
