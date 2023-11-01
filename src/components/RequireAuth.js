import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MenuAppBar from "./appBar";
import MyDrawer from "./drawer";

const RequireAuth = (props) => {
  const token = localStorage.getItem("token");
  const role = parseInt(localStorage.getItem("allowedRoles"));
  const [state, setState] = React.useState(false);

  return props.allowedRoles.includes(role) && token ? (
    <>
      {/* <MenuAppBar state={state} setState={setState} /> */}
      <div style={{ display: "flex" }}>
        {/* <MyDrawer state={state} setState={setState} /> */}
        <MyDrawer Outlet={Outlet} />
        {/* <Outlet /> */}
      </div>
    </>
  ) : token ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default RequireAuth;
