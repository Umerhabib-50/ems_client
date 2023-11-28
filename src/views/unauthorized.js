import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const [allowedRoles, setAllowedRoles] = useState(
    Number(localStorage.getItem("allowedRoles"))
  );
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (allowedRoles === 1000) {
        navigate("/");
      } else if (allowedRoles === 2000) {
        navigate("/employee");
      }
    }, 5000);

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate, allowedRoles]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#ff6347", marginBottom: "10px" }}>Unauthorized</h1>
      <p style={{ fontSize: "1.2em", color: "#333", marginBottom: "20px" }}>
        Sorry, you don't have permission to access this page. Redirecting in{" "}
        {counter} seconds...
      </p>
      <div
        style={{
          backgroundColor: "#f8f8f8",
          padding: "10px",
          borderRadius: "5px",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        <p style={{ fontSize: "0.8em", color: "#666", margin: "0" }}>
          You may be redirected sooner based on your role.
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
