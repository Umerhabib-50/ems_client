import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Dashboard() {
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
          <Paper
            style={{
              width: "250px",
              height: "200px",
              marginTop: 20,
            }}
            elevation={3}
          >
            Umer
          </Paper>
          <Paper
            style={{
              width: "250px",
              height: "200px",
              marginTop: 20,
            }}
            elevation={3}
          >
            Umer
          </Paper>
          <Paper
            style={{
              width: "250px",
              height: "200px",
              marginTop: 20,
            }}
            elevation={3}
          >
            Umer
          </Paper>
          <Paper
            style={{
              width: "250px",
              height: "200px",
              marginTop: 20,
            }}
            elevation={3}
          >
            Umer
          </Paper>
        </Container>
      </div>
    </>
  );
}
