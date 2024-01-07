import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import group from "../../assets/images/group.png";
import { Link } from "react-router-dom";

export default function Assets() {
  const sections = [
    {
      title: "Apply Asset",
      background: "linear-gradient(90deg, #90EE90, #32CD32)",
      navigate: "/applyasset",
    },
    {
      title: "Asset History",
      background: "linear-gradient(90deg, #FFA500, #FF8C00)",
      navigate: "/assethistory",
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
            // justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
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
