import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import group from "../assets/images/group.png";
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
      navigate: "/loans",
    },
    {
      title: "Assets",
      background: "linear-gradient(90deg, #90EE90, #32CD32)",
      navigate: "/assets",
    },
    {
      title: "Leaves",
      background: "linear-gradient(90deg, #FFA500, #FF8C00)",
      navigate: "/leaves",
    },
  ];

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
          {sections.map((section, index) => (
            <div
              style={{ position: "relative", cursor: "pointer" }}
              key={index}
            >
              <Link to={section.navigate} style={{ textDecoration: "none" }}>
                <Paper
                  style={{
                    width: "250px",
                    height: "130px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    background: section.background,
                    padding: 20,
                    marginBottom: 20,
                  }}
                  elevation={3}
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
