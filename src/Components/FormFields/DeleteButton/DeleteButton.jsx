import { Button, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Cancel } from "@mui/icons-material";

function DeleteButton({ label, deleteitem, ...props }) {
  return (
    <div>
      {deleteitem ? (
        <IconButton {...props} type="button" variant="outlined" color="error">
          <Cancel />
        </IconButton>
      ) : (
        <Button
          {...props}
          type="button"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          {label}
        </Button>
      )}
    </div>
  );
}

export default DeleteButton;
