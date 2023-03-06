import { Button, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Cancel } from "@mui/icons-material";
import { DeleteButtonStyled } from "../styles/FormInputFields";

function DeleteButton({ label, deleteitem, ...props }) {
  return (
    <div>
      {deleteitem ? (
        <IconButton {...props} type="button" variant="outlined" color="error">
          <Cancel />
        </IconButton>
      ) : (
        <DeleteButtonStyled
          {...props}
          type="button"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          {label}
        </DeleteButtonStyled>
      )}
    </div>
  );
}

export default DeleteButton;
