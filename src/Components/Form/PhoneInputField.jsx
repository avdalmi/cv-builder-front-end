import { useField } from "formik";
import React from "react";
import PhoneInput from "react-phone-input-2";

function PhoneInputField({ label, ...props }) {
  const [field, meta, helpers] = useField(props.name);
  console.log("field", field);
  console.log("props", props);
  console.log("helpers", helpers);
  return (
    <PhoneInput
      label={label}
      {...props}
      {...field}
      //   name={props.name}
      value={field.value}
      defaultCountry="NL"
      onChange={(value) => {
        helpers.setValue(value);
      }}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}

export default PhoneInputField;
