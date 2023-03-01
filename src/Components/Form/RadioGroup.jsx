import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { Field, useField, useFormikContext } from "formik";
import { drivingLicenseOptions } from "../../Data/DrivingLicenseOptions";
import SelectField from "./SelectField";

function RadioButtonGroup({ label, ...props }) {
  const [field, meta] = useField(props);
  // console.log("meta", meta);
  // const { values } = useFormikContext();
  // console.log(values);
  return (
    <FormControl fullWidth>
      <FormLabel>Driving License</FormLabel>
      <RadioGroup defaultValue="" {...field} {...props}>
        <FormControlLabel value="true" control={<Radio />} label="yes" />
        <FormControlLabel value="false" control={<Radio />} label="no" />
      </RadioGroup>
      {meta.value === "true" ? (
        <SelectField
          name={"profile.drivingLicense.drivingLicenseType"}
          options={drivingLicenseOptions}
          label="Select license type"
          // defaultValue=""
          required={true}
        />
      ) : (
        <SelectField
          name={"profile.drivingLicense.drivingLicenseType"}
          options={drivingLicenseOptions}
          label="Select license type *"
          // defaultValue=""
          disabled={true}
        />
      )}
    </FormControl>
  );
}

export default RadioButtonGroup;
