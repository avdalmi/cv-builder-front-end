import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

function SelectField({ ...props }) {
  const [field, meta] = useField(props);
  // console.log("props", props);
  return (
    <TextField
      style={{ width: 550 }}
      select
      //   label="select"
      defaultValue=""
      {...field}
      {...props}
    >
      {props.options.map((item) => {
        return (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        );
      })}
    </TextField>
  );
}

export default SelectField;
