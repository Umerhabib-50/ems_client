import { Routes, Route } from "react-router-dom";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";
import Layout from "./components/Layout";
import Dashboard from "./views/admin/dashboard";
import RequireAuth from "./components/RequireAuth";
import EmpDashboard from "./views/employee/empDashboard";
import Unauthorized from "./views/unauthorized";
import AllEmployees from "./views/admin/allEmployees";
import EmployeeDetails from "./views/employee/employeeDetails";
import "./App.css";
import CreateEmployee from "./views/admin/createEmployee";
import Loans from "./views/employee/loans";
import Applyloan from "./views/employee/applyloan";
import Missing from "./views/missing";
import AllLoans from "./views/admin/allloans";
import LoanHistory from "./views/employee/loanHistory";
import AllLeaves from "./views/admin/allLeaves";
import Leaves from "./views/employee/leaves";
import ApplyLeave from "./views/employee/applyleave";
import LeaveHistory from "./views/employee/leavehistory";

function App() {
  const allowedRoles = {
    admin: 1000,
    employee: 2000,
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[allowedRoles.admin]} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/allemp" element={<AllEmployees />} />
          <Route path="/createEmp" element={<CreateEmployee />} />
          <Route path="/all_loans" element={<AllLoans />} />
          <Route path="/all_leaves" element={<AllLeaves />} />
        </Route>
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[allowedRoles.employee]} />}>
          <Route path="/employee" element={<EmpDashboard />} />
          <Route path="/details" element={<EmployeeDetails />} />
          <Route path="/loan" element={<Loans />} />
          <Route path="/applyloan" element={<Applyloan />} />
          <Route path="/loanhistory" element={<LoanHistory />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/applyleave" element={<ApplyLeave />} />
          <Route path="/leavehistory" element={<LeaveHistory />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
