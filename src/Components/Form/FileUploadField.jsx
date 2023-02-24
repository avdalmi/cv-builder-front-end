import React from "react";
import { Field, useField } from "formik";

function FileUploadField({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <div style={{ margin: "15px", border: "1px solid black", padding: "10px" }}>
      <label>Select a profile picture</label>
      <Field
        {...field}
        {...props}
        value={meta.value}
        accept=".jpg, .jpeg, .png"
      />
    </div>
  );
}

export default FileUploadField;
