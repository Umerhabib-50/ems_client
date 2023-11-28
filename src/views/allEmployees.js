import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../services/adminService";

import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const AllEmployees = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "position", headerName: "Position", width: 100 },
    { field: "department", headerName: "Department", width: 100 },
    { field: "salary", headerName: "Salary", width: 100 },
    { field: "password", headerName: "Password", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
  ];

  const rows = data.map((employee, index) => ({
    id: index + 1,
    name: employee.name,
    email: employee.email,
    position: employee.position,
    department: employee.department,
    salary: employee.salary,
    password: employee.password,
    date: employee.date,
  }));

  const getEmployees = async () => {
    const data = await getAllEmployees();
    setData(data.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          All Employees
        </h1>
        <button
          onClick={() => {
            navigate("/createEmp");
          }}
          style={{
            padding: "10px",
            fontSize: "1rem",
            background: "linear-gradient(90deg, #9DB8E5, #1976D2)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Create Employee
        </button>
      </div>

      <div style={{ height: 300 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default AllEmployees;
