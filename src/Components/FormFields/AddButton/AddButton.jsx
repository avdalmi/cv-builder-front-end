import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
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
    // <AddButtonStyled type="button" variant="outlined" {...props}>
    //   {label}
    // </AddButtonStyled>
  );
}
{
  /* <DeleteButtonStyled
  {...props}
  type="button"
  variant="outlined"
  color="error"
  startIcon={<DeleteIcon />}
>
  {label}
</DeleteButtonStyled>; */
}
export default AddButton;
