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
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      style={{ margin: "10px" }}
    />
  );
}

export default TextInputField;