import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    // Simulating fetching allowedRoles from storage
    const storedAllowedRoles = localStorage.getItem("allowedRoles");
    const parsedAllowedRoles = Number(storedAllowedRoles);

    // Redirect after 5 seconds if allowedRoles is 1000 or 2000
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    setTimeout(() => {
      if (parsedAllowedRoles === 1000) {
        navigate("/");
      } else if (parsedAllowedRoles === 2000) {
        navigate("/employee");
      } else {
        // If no allowedRoles found, redirect to a default route or handle as needed
        navigate("/");
      }
      clearInterval(timer);
    }, 5000);

    // Cleanup the timer to avoid memory leaks
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#ff6347", marginBottom: "10px" }}>Missing</h1>
      <p style={{ fontSize: "1.2em", color: "#333", marginBottom: "20px" }}>
        Sorry, the page you are looking for does not exist.
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
          Please check the URL or contact support.
        </p>
      </div>
      <p style={{ fontSize: "1.2em", color: "#333", margin: "0" }}>
        Redirecting in {counter} seconds...
      </p>
    </div>
  );
};

export default Missing;
