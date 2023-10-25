import React, { useEffect } from "react";
import axiosInstance from "../utils/axios";

const Dashboard = () => {
  const getData = async () => {
    const { data } = await axiosInstance.get("/admin/employees/all");
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
