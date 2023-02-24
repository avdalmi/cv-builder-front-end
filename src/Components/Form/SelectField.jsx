import { MenuItem, Select, TextField } from "@mui/material";
import { Field, useField } from "formik";
import React from "react";
// import { brainFirstOptions } from "../../Data/BrainFirstOptions";

function SelectField({ ...props }) {
  const [field, meta] = useField(props);
  //   console.log(props);
  //   //   console.log(brainFirstOptions);
  //   const { brainFirstOptions, name, type } = props;
  //   console.log("options", brainFirstOptions, "type", type);
  return (
    <TextField
      select
      label="select"
      defaultValue=""
      {...field}
      {...props}
      //   name="profile.brainFirst.resultOne"
      //   helperText="Please select looo"
    >
      {props.options.map((item) => {
        // console.log("item", item);
        return (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        );
      })}
    </TextField>
    // <Select value={props.options}>
    //   {props.options.map((item) => {
    //     return (
    //       <MenuItem key={item.id} value={item.name}>
    //         {item.name}
    //       </MenuItem>
    //     );
    //   })}
    // </Select>
  );
}

export default SelectField;
