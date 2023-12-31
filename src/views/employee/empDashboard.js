import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import group from "../../assets/images/group.png";
import { Link } from "react-router-dom";

export default function EmpDashboard() {
  const sections = [
    {
      title: "My Details",
      background: "linear-gradient(90deg, #90EE90, #32CD32)",
      navigate: "/details",
    },
    {
      title: "Loans",
      background: "linear-gradient(90deg, #FFA500, #FF8C00)",
      navigate: "/loan",
    },
    {
      title: "Leaves",
      background: "linear-gradient(90deg, #9DB8E5, #1976D2)",
      navigate: "/leaves",
    },
    {
      title: "Assets",
      background: "linear-gradient(90deg, #FFB6C1, #FF69B4)",
      navigate: "/assets",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const name = localStorage.getItem("name");

  return (
    <>
      <div style={{ width: "100%" }}>
        <Container
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "100%",
              marginBottom: 5,
            }}
          >
            <h2>Welcome {name.toLocaleUpperCase()}</h2>
          </div>
          <div
            style={{
              width: "100%",
              marginBottom: 20,
            }}
          >
            <p>
              "Introducing our enhanced Employee Dashboard – your centralized
              hub for effortless self-management. Now you can effortlessly
              update your profile, apply for leaves, request assets, and even
              apply for loans, all in one place. We believe in giving our team
              the tools they need to succeed, and this upgraded dashboard is
              designed with your convenience in mind. Empower your professional
              journey – explore the new features today!"
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
                marginRight: 20,
                marginBottom: 20,
              }}
            >
              <Link to={section.navigate} style={{ textDecoration: "none" }}>
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
