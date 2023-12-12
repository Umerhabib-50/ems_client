import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaveHistory = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [filter, setFilter] = useState("all"); // Default filter: all

  const userId = localStorage.getItem("userid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/employee/leavehistory",
          {
            employeeId: userId,
          }
        );
        setLeaveData(response.data.data);
        setFilteredLeaves(response.data.data); // Initially set to all leave history
      } catch (error) {
        console.error("Error fetching leave history:", error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    // Apply filtering based on the selected status
    if (filter === "all") {
      setFilteredLeaves(leaveData);
    } else {
      const filtered = leaveData.filter(
        (leave) => leave.status.toLowerCase() === filter
      );
      setFilteredLeaves(filtered);
    }
  }, [filter, leaveData]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Leave History
      </h2>
      <label style={{ marginRight: "10px" }}>Filter by status:</label>
      <select
        style={{ padding: "8px", borderRadius: "5px", marginRight: "20px" }}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th style={tableHeaderStyle}>Start Date</th>
            <th style={tableHeaderStyle}>End Date</th>
            <th style={tableHeaderStyle}>Reason</th>
            <th style={tableHeaderStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeaves.map((leave) => (
            <tr key={leave._id}>
              <td style={tableCellStyle}>{formatDate(leave.startDate)}</td>
              <td style={tableCellStyle}>{formatDate(leave.endDate)}</td>
              <td style={tableCellStyle}>{leave.reason}</td>
              <td style={tableCellStyle}>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

export default LeaveHistory;
