import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "@mui/icons-material";
import { useField } from "formik";
import { TextFieldStyled } from "../styles/FormInputFields";

function LinkField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextFieldStyled
      fullWidth
      variant="standard"
      {...props}
      {...field}
      type="text"
      label={label}
      error={meta.touched && Boolean(meta.error)}
      value={meta.value}
      helperText={meta.touched && meta.error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Link />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default LinkField;
