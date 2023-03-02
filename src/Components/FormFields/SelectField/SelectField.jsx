import { useField } from "formik";
import React from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";

function SelectField({ label, disabled, required, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormControl
      fullWidth
      variant="standard"
      disabled={disabled}
      required={required}
    >
      {meta.touched && Boolean(meta.error) ? (
        <InputLabel error>{label}</InputLabel>
      ) : (
        <InputLabel>{label}</InputLabel>
      )}
      <Select
        {...field}
        {...props}
        style={{ textAlign: "left" }}
        error={meta.touched && Boolean(meta.error)}
        value={meta.value}
      >
        {props.options.map((item, index) => {
          return (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default SelectField;
