import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const token = false;
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
