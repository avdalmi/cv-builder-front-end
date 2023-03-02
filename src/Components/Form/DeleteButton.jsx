import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton({ label, ...props }) {
  return (
    <Button
      {...props}
      type="button"
      variant="outlined"
      color="error"
      startIcon={<DeleteIcon />}
    >
      {label}
    </Button>
  );
}

export default DeleteButton;
