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

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
