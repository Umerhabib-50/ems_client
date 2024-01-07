import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import group from "../../assets/images/group.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const sections = [
    {
      title: "Employees",
      background: "linear-gradient(90deg, #9DB8E5, #1976D2)",
      navigate: "/allemp",
    },
    {
      title: "Loans",
      background: "linear-gradient(90deg, #FFB6C1, #FF69B4)",
      navigate: "/all_loans",
    },
    {
      title: "Assets",
      background: "linear-gradient(90deg, #90EE90, #32CD32)",
      navigate: "/all_assets",
    },
    {
      title: "Leaves",
      background: "linear-gradient(90deg, #FFA500, #FF8C00)",
      navigate: "/all_leaves",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Container
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "100%",
              marginBottom: 20,
            }}
          >
            <p>
              "Introducing our advanced Admin Dashboard – the command center for
              seamless management of your workforce. With this robust tool,
              administrators can effortlessly oversee employee profiles, process
              leave requests, manage loan and asset applications, and even
              create new employee profiles. We are committed to providing our
              administrators with the essential tools for efficient
              decision-making and streamlined personnel management. Tailored for
              your convenience, this upgraded dashboard empowers administrators
              to review, accept, or reject leaves, loans, and asset requests
              with ease. Take charge of your administrative journey – explore
              the enhanced features today!"
            </p>
          </div>
          {sections.map((section, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                cursor: "pointer",
                transition: "width 0.3s, height 0.3s",
                width: hoveredIndex === index ? "270px" : "250px",
                height: hoveredIndex === index ? "150px" : "130px",
                marginBottom: 20,
              }}
            >
              <Link
                to={section.navigate}
                style={{ textDecoration: "none", marginBottom: 10 }}
              >
                <Paper
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    background: section.background,
                    padding: 20,
                    marginBottom: 20,
                  }}
                  elevation={3}
                  className="dashboard-card"
                >
                  <h3 style={{ color: "white" }}>{section.title}</h3>
                </Paper>
                <img
                  src={group}
                  alt="Your Image"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-60%)",
                    width: "80px",
                    height: "80px",
                    opacity: 0.2,
                  }}
                />
              </Link>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}
