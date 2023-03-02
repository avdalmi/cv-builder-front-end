import React from "react";
import { Button } from "@mui/material";

function FormNavigation(props) {
  // console.log("props", props);
  return (
    <div
      style={{
        display: "flex",
        margin: "50px",
        justifyContent: "space-between",
      }}
    >
      {props.hasPrevious && (
        <Button variant="contained" type="button" onClick={props.onBackClick}>
          Back
        </Button>
      )}
      <Button type="submit" color="primary" variant="contained">
        {props.isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
}

export default FormNavigation;
