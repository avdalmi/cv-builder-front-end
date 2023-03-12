import { useField } from "formik";
import React from "react";
import { MenuItem, InputLabel, Select, FormHelperText } from "@mui/material";
import { FormControlStyled } from "../Styles/StyleSheet";

function SelectField({ label, disabled, required, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormControlStyled
      fullWidth
      variant="standard"
      disabled={disabled}
      required={required}
    >
      {meta.touched && Boolean(meta.error) ? (
        <InputLabel htmlFor={props.name} error>
          {label}
        </InputLabel>
      ) : (
        <InputLabel htmlFor={props.name}>{label}</InputLabel>
      )}
      <Select
        labelId={props.name}
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
    </FormControlStyled>
  );
}

export default SelectField;
