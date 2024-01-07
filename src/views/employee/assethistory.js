import React, { useState, useEffect } from "react";
import axios from "axios";

const AssetHistory = () => {
  const [assetHistory, setAssetHistory] = useState([]);
  const [filteredAssetHistory, setFilteredAssetHistory] = useState([]);
  const [filter, setFilter] = useState("all"); // Default filter: all

  const userId = "654a8c742674e68e7e7a7a3f"; // Hardcoded user ID for demonstration

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/employee/assethistory",
          {
            employeeId: userId,
          }
        );
        setAssetHistory(response.data.data);
        setFilteredAssetHistory(response.data.data); // Initially set to all asset history
      } catch (error) {
        console.error("Error fetching asset history:", error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    // Apply filtering based on the selected status
    if (filter === "all") {
      setFilteredAssetHistory(assetHistory);
    } else {
      const filtered = assetHistory.filter(
        (asset) => asset.status.toLowerCase() === filter
      );
      setFilteredAssetHistory(filtered);
    }
  }, [filter, assetHistory]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Asset History
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
            <th style={tableHeaderStyle}>Asset Name</th>
            <th style={tableHeaderStyle}>Type</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Request Date</th>
            <th style={tableHeaderStyle}>Issue Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssetHistory.map((asset) => (
            <tr key={asset._id}>
              <td style={tableCellStyle}>{asset.name}</td>
              <td style={tableCellStyle}>{asset.type}</td>
              <td style={tableCellStyle}>{asset.status}</td>
              <td style={tableCellStyle}>{formatDate(asset.requestDate)}</td>

              <td style={tableCellStyle}>
                {asset?.issueDate ? formatDate(asset.issueDate) : "N/A"}
              </td>
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

export default AssetHistory;
