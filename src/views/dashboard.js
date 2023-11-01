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
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Paper
            style={{
              width: "256px",
              height: "256px",
              marginTop: 10,
            }}
            elevation={3}
          >
            Umer
          </Paper>
          <Paper
            style={{
              width: "256px",
              height: "256px",
              marginTop: 10,
            }}
            elevation={3}
          >
            Umer
          </Paper>
          <Paper
            style={{
              width: "256px",
              height: "256px",
              marginTop: 10,
            }}
            elevation={3}
          >
            Umer
          </Paper>
          <Paper
            style={{
              width: "256px",
              height: "256px",
              marginTop: 10,
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
