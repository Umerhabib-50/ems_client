// import { useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";

// const Layout = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (token) {
//       navigate("/admin");
//     }
//   }, [navigate]);

//   return (
//     <main className="App">
//       <Outlet />
//     </main>
//   );
// };

// export default Layout;

import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userRole = "admin";

  // useEffect(() => {
  //   if (token) {
  //     if (userRole === "admin") {
  //       navigate("/admin");
  //     } else if (userRole === "employee") {
  //       navigate("/employee");
  //     } else {
  //       navigate("unauthorized");
  //     }
  //   }
  // }, [navigate, token, userRole]);

  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
