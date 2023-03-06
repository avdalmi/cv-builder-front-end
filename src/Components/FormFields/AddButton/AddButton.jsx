import { Button } from "@mui/material";
import React from "react";
import { AddButtonStyled } from "../styles/FormInputFields";

function AddButton({ label, ...props }) {
  return (
    <AddButtonStyled type="button" variant="outlined" {...props}>
      {label}
    </AddButtonStyled>
  );
}

export default AddButton;
