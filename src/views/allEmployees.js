import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../services/adminService";

import { DataGrid } from "@mui/x-data-grid";

const AllEmployees = () => {
  const [data, setData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "email", headerName: "Email", width: 100 },
    { field: "position", headerName: "Position", width: 100 },
    { field: "department", headerName: "Department", width: 100 },
    { field: "salary", headerName: "Salary", width: 100 },
    { field: "password", headerName: "Password", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "password", headerName: "Password", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
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
    password: employee.password,
    date: employee.date,
    password: employee.password,
    date: employee.date,
  }));

  const getEmployees = async () => {
    const data = await getAllEmployees();
    setData(data.data);
    console.log("data", data.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h1>AllEmployees</h1>
      <div style={{ height: 300, width: "95%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default AllEmployees;
