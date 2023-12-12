import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanHistory = () => {
    const [loanData, setLoanData] = useState([]);
    const [filteredLoans, setFilteredLoans] = useState([]);
    const [filter, setFilter] = useState('all'); // Default filter: all

    const userId = localStorage.getItem("userid")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/employee/loanhistory', {
                    userId
                });
                setLoanData(response.data.data);
                setFilteredLoans(response.data.data); // Initially set to all loans
            } catch (error) {
                console.error('Error fetching loan history:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Apply filtering based on the selected status
        if (filter === 'all') {
            setFilteredLoans(loanData);
        } else {
            const filtered = loanData.filter(loan => loan.status.toLowerCase() === filter);
            setFilteredLoans(filtered);
        }
    }, [filter, loanData]);

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Loan History</h2>
            <label style={{ marginRight: '10px' }}>Filter by status:</label>
            <select
                style={{ padding: '8px', borderRadius: '5px', marginRight: '20px' }}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
            </select>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead style={{ backgroundColor: '#f2f2f2' }}>
                    <tr>
                        <th style={tableHeaderStyle}>Name</th>
                        <th style={tableHeaderStyle}>Email</th>
                        <th style={tableHeaderStyle}>Amount</th>
                        <th style={tableHeaderStyle}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLoans.map(loan => (
                        <tr key={loan._id}>
                            <td style={tableCellStyle}>{loan.name}</td>
                            <td style={tableCellStyle}>{loan.email}</td>
                            <td style={tableCellStyle}>{loan.amount}</td>
                            <td style={tableCellStyle}>{loan.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const tableHeaderStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
};

export default LoanHistory;