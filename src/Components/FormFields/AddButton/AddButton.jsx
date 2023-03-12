import { AddCircle } from "@mui/icons-material";
import React from "react";
import { AddButtonStyled } from "../Styles/StyleSheet";

function AddButton({ label, ...props }) {
  return (
    <AddButtonStyled
      {...props}
      type="button"
      variant="outlined"
      startIcon={<AddCircle />}
    >
      {" "}
      {label}
    </AddButtonStyled>
  );
}

export default AddButton;
