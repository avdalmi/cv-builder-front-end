import { Button } from "@mui/material";
import React from "react";

function AddButton({ label, ...props }) {
  return (
    <Button type="button" variant="outlined" {...props}>
      {label}
    </Button>
  );
}

export default AddButton;
