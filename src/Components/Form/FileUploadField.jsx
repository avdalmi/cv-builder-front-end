import TextInputField from "./TextInputField";
import React from "react";
import { Field, useField } from "formik";

function FileUploadField({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextInputField
        {...field}
        {...props}
        value={meta.value}
        accept=".jpg, .jpeg, .png .pdf"
      />
    </div>
  );
}

export default FileUploadField;
