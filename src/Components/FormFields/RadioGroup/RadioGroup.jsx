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
import { drivingLicenseOptions } from "../../../Data/DrivingLicenseOptions";
import SelectField from "../SelectField/SelectField";
import {
  FormControlStyled,
  RadioBoxStyled,
  RadioFormLabelStyled,
  RadioGroupStyled,
} from "../Styles/StyleSheet";

function RadioButtonGroup({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormControlStyled
      fullWidth
      // style={{
      //   backgroundColor: "yellow",
      // }}
    >
      <RadioBoxStyled>
        <RadioFormLabelStyled htmlFor="radioGroupLabel">
          Do you have a driving license?
        </RadioFormLabelStyled>

        <RadioGroupStyled
          id="radioGroupLabel"
          defaultValue=""
          {...field}
          {...props}
        >
          <FormControlLabel value="true" control={<Radio />} label="yes" />
          <FormControlLabel value="false" control={<Radio />} label="no" />
        </RadioGroupStyled>
      </RadioBoxStyled>

      <div>
        {meta.value === "true" ? (
          <SelectField
            name={"profile.drivingLicense.drivingLicenseType"}
            options={drivingLicenseOptions}
            label="Select license type"
            required={true}
          />
        ) : (
          <SelectField
            name={"profile.drivingLicense.drivingLicenseType"}
            options={drivingLicenseOptions}
            label="Select license type *"
            disabled={true}
          />
        )}
      </div>
    </FormControlStyled>
  );
}

export default RadioButtonGroup;
