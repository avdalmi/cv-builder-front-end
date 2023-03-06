import React from "react";
import { useField } from "formik";

import { TextFieldStyled } from "../styles/FormInputFields";
function TextInputField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <TextFieldStyled
      variant="standard"
      color="primary"
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
