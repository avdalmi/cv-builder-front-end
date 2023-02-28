import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";
import { Link } from "@mui/icons-material";
import { useField } from "formik";

function LinkField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel>{label}</InputLabel>
      <Input
        {...props}
        {...field}
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <Link />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default LinkField;
