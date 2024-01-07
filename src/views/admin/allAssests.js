import React, { useState, useEffect } from "react";
import axios from "axios";

const AllAssets = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/v1/admin/employees/assets"
      );
      setAssets(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = async (assetId) => {
    try {
      setLoading(true);
      const { data } = await axios.patch(
        "http://localhost:5000/api/v1/admin/employees/assets/approve-reject",
        {
          assetId,
          status: "accepted",
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error accepting asset:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (assetId) => {
    try {
      setLoading(true);
      const { data } = await axios.patch(
        "http://localhost:5000/api/v1/admin/employees/assets/approve-reject",
        {
          assetId,
          status: "rejected",
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error rejecting asset:", error);
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
      <h1>All Assets</h1>
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
              <th style={tableHeaderStyle}>Asset ID</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Type</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Request Date</th>
              <th style={tableHeaderStyle}>Issue Date</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset._id} style={tableRowStyle}>
                <td style={tableCellStyle}>{asset._id}</td>
                <td style={tableCellStyle}>{asset.name}</td>
                <td style={tableCellStyle}>{asset.type}</td>
                <td style={tableCellStyle}>{asset.status}</td>
                <td style={tableCellStyle}>{formatDate(asset.requestDate)}</td>
                <td style={tableCellStyle}>
                  {asset?.issueDate ? formatDate(asset?.issueDate) : "N/A"}
                </td>
                {asset.status == "Pending" && (
                  <td style={tableCellStyle}>
                    <button
                      style={acceptButtonStyle}
                      onClick={() => handleAccept(asset._id)}
                    >
                      Accept
                    </button>
                    <button
                      style={rejectButtonStyle}
                      onClick={() => handleReject(asset._id)}
                    >
                      Reject
                    </button>
                  </td>
                )}
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

export default AllAssets;
