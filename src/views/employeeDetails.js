import React from "react";

const EmployeeDetails = () => {
  // Retrieve data from local storage
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const position = localStorage.getItem("position");
  const salary = localStorage.getItem("salary");
  const department = localStorage.getItem("department");
  const joiningDate = localStorage.getItem("date");

  return (
    <div
      style={{
        maxWidth: "400px",
        // margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#3498db" }}>Employee Details</h2>
      <table style={{ width: "100%", marginTop: "20px" }}>
        <tbody>
          <tr>
            <td
              style={{ fontWeight: "bold", color: "#333", textAlign: "left" }}
            >
              Name:
            </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td
              style={{ fontWeight: "bold", color: "#333", textAlign: "left" }}
            >
              Email:
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td
              style={{ fontWeight: "bold", color: "#333", textAlign: "left" }}
            >
              Position:
            </td>
            <td>{position}</td>
          </tr>
          <tr>
            <td
              style={{ fontWeight: "bold", color: "#333", textAlign: "left" }}
            >
              Salary:
            </td>
            <td>{salary}</td>
          </tr>
          <tr>
            <td
              style={{ fontWeight: "bold", color: "#333", textAlign: "left" }}
            >
              Department:
            </td>
            <td>{department}</td>
          </tr>
          <tr>
            <td
              style={{ fontWeight: "bold", color: "#333", textAlign: "left" }}
            >
              Joining Date:
            </td>
            <td>{joiningDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
