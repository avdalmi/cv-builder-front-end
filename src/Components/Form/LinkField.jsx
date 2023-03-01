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

function LinkField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl fullWidth variant="standard">
      <TextField
        {...props}
        {...field}
        type="text"
        label={label}
        error={meta.touched && Boolean(meta.error)}
        value={meta.value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Link />
            </InputAdornment>
          ),
        }}
      />
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default LinkField;
