import React, { useState, useEffect } from "react";
import axios from "axios";

const AllLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/admin/employees/loans"
        );
        setLoans(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  const handleAccept = (loanId) => {
    // Implement accept logic here
    console.log(`Loan accepted: ${loanId}`);
  };

  const handleReject = (loanId) => {
    // Implement reject logic here
    console.log(`Loan rejected: ${loanId}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>All Loans</h1>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>User ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Amount</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id} style={tableRowStyle}>
              <td style={tableCellStyle}>{loan.userId}</td>
              <td style={tableCellStyle}>{loan.name}</td>
              <td style={tableCellStyle}>{loan.email}</td>
              <td style={tableCellStyle}>{loan.amount}</td>
              <td style={tableCellStyle}>{loan.status}</td>
              <td style={tableCellStyle}>
                <button
                  style={acceptButtonStyle}
                  onClick={() => handleAccept(loan._id)}
                >
                  Accept
                </button>
                <button
                  style={rejectButtonStyle}
                  onClick={() => handleReject(loan._id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles
const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const tableRowStyle = {
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  textAlign: "center",
};

const acceptButtonStyle = {
  padding: "8px 12px",
  margin: "4px",
  cursor: "pointer",
  backgroundColor: "#4CAF50", // Green color for accept button
  color: "white",
  border: "none",
  borderRadius: "4px",
};

const rejectButtonStyle = {
  padding: "8px 12px",
  margin: "4px",
  cursor: "pointer",
  backgroundColor: "#f44336", // Red color for reject button
  color: "white",
  border: "none",
  borderRadius: "4px",
};

export default AllLoans;
