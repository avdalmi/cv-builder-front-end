import React from "react";
import { FieldConfig, useField } from "formik";
import { styled, TextField } from "@mui/material";
import { Formik } from "formik";

function TextInputField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <TextFieldTest
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

const TextFieldTest = styled(TextField)(({ theme }) => ({
  // width: 400,
  // color: "pink",
  // backgroundColor: "green",
}));

export default TextInputField;
