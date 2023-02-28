import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useField } from "formik";

function RadioButtonGroup({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Driving License</FormLabel>
      <RadioGroup defaultValue="" {...field} {...props}>
        <FormControlLabel value={true} control={<Radio />} label="yes" />
        <FormControlLabel value={false} control={<Radio />} label="no" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonGroup;
