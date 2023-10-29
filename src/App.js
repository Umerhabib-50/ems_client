import { Routes, Route } from "react-router-dom";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";
import Layout from "./components/Layout";
import Dashboard from "./views/dashboard";
import RequireAuth from "./components/RequireAuth";
import EmpDashboard from "./views/empDashboard";
import Unauthorized from "./views/unauthorized";
import AllEmployees from "./views/allEmployees";
import EmployeeDetails from "./views/employeeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth role={"admin"} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/allemp" element={<AllEmployees />} />
        </Route>

        <Route element={<RequireAuth role={"employee"} />}>
          <Route path="/" element={<EmpDashboard />} />
          <Route path="/details" element={<EmployeeDetails />} />
        </Route>

        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
