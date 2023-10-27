import React, { useEffect } from "react";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // const getData = async () => {
  //   try {
  //     const { data } = await axiosInstance.get("/admin/employees/all");
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        navigate to login page
      </button>
    </div>
  );
};

export default Dashboard;
