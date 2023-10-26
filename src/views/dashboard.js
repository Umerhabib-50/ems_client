import React, { useEffect } from "react";
import axiosInstance from "../utils/axios";

const Dashboard = () => {
  const getData = async () => {
    try {
      const { data } = await axiosInstance.get("/admin/employees/all");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
