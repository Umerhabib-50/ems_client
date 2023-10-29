// import { Navigate, Outlet } from "react-router-dom";

// const RequireAuth = ({ role }) => {
//   const token = localStorage.getItem("token");
//   return token ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default RequireAuth;

import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ role }) => {
  const token = localStorage.getItem("token");

  // // Check the user's token and role to determine if they can access the route
  // if (token) {
  //   // Check if the user's role matches the required role for this route
  //   if (role === "admin") {
  //     // User has the "admin" role
  //     return <Outlet />;
  //   } else if (role === "emp") {
  //     // User has the "emp" role
  //     return <Outlet />;
  //   } else {
  //     <Navigate to={"unauthorized"} />;
  //   }
  // }

  // // If the user doesn't have the required token or role, navigate to the "unauthorized" route
  // return <Navigate to="/unauthorized" replace />;

  return role == "admin" ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default RequireAuth;
