import React, { useState, useEffect } from "react";
import axios from "axios";

const AllLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/v1/admin/employees/leaves"
      );
      setLeaves(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = async (leaveId) => {
    try {
      setLoading(true);
      await axios.patch(
        "http://localhost:5000/api/v1/admin/employees/leaves/approve-reject",
        {
          leaveId,
          status: "accepted",
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error accepting leave:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (leaveId) => {
    try {
      setLoading(true);
      await axios.patch(
        "http://localhost:5000/api/v1/admin/employees/leaves/approve-reject",
        {
          leaveId,
          status: "rejected",
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error rejecting leave:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>All Leaves</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            margin: "0 auto",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Employee ID</th>
              <th style={tableHeaderStyle}>Start Date</th>
              <th style={tableHeaderStyle}>End Date</th>
              <th style={tableHeaderStyle}>Reason</th>
              <th style={tableHeaderStyle}>Leave Type</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id} style={tableRowStyle}>
                <td style={tableCellStyle}>{leave.employeeId}</td>
                <td style={tableCellStyle}>{formatDate(leave.startDate)}</td>
                <td style={tableCellStyle}>{formatDate(leave.endDate)}</td>
                <td style={tableCellStyle}>{leave.reason}</td>
                <td style={tableCellStyle}>{leave.leaveType}</td>
                <td style={tableCellStyle}>{leave.status}</td>
                <td style={tableCellStyle}>
                  <button
                    style={acceptButtonStyle}
                    onClick={() => handleAccept(leave._id)}
                  >
                    Accept
                  </button>
                  <button
                    style={rejectButtonStyle}
                    onClick={() => handleReject(leave._id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
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

export default AllLeaves;
