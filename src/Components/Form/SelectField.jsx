import { useField } from "formik";
import React from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
function SelectField({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormControl fullWidth>
      <InputLabel variant="standard">{props.disabledtext}</InputLabel>
      <Select {...field} {...props} style={{ textAlign: "left" }}>
        {props.options.map((item, index) => {
          return (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
    // <TextField
    //   style={{ width: 500 }}
    //   select
    //   defaultValue=""
    //   {...field}
    //   {...props}
    // >
    //   {props.options.map((item) => {
    //     return (
    //       <MenuItem key={item.id} value={item.name}>
    //         {item.name}
    //       </MenuItem>
    //     );
    //   })}
    // </TextField>
  );
}

export default SelectField;
