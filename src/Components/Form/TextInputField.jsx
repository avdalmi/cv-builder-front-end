import React from "react";
import { FieldConfig, useField } from "formik";
import { TextField } from "@mui/material";
import { Formik } from "formik";

function TextInputField({ label, ...props }) {
  const [field, meta] = useField(props);
  // console.log("props", props);
  // console.log("field", field);
  // console.log("meta", meta);

  return (
    <TextField
      variant="standard"
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      value={meta.value}
    />
  );
}

export default TextInputField;
