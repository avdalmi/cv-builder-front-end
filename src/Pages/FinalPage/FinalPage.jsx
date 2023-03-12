import { Button, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function FinalPage() {
  const { state } = useLocation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem",
      }}
    >
      <Typography variant="h1">Submitted!</Typography>
      <Button href="/" variant="contained">
        Back to start page
      </Button>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h4">JSON Data</Typography>
        <pre
          style={{
            fontSize: "11px",
            maxWidth: "200px",
          }}
        >
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default FinalPage;
