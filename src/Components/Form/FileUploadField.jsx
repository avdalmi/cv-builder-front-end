import TextInputField from "./TextInputField";
import React from "react";
import { Field, useField } from "formik";
import { Stack, Button, IconButton, InputLabel } from "@mui/material";
import { DownloadDone, PhotoCamera, UploadFile } from "@mui/icons-material";

function FileUploadField({ label, ...props }) {
  const [field, meta] = useField(props);

  const changeFileIconStatus = () => {
    if (meta.value.length > 0) {
      return <DownloadDone />;
    } else {
      return <UploadFile />;
    }
  };

  const changeImageIconStatus = () => {
    if (meta.value.length > 0) {
      return <DownloadDone />;
    } else {
      return <PhotoCamera />;
    }
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <InputLabel>{label}</InputLabel>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          {...field}
          {...props}
          hidden
          accept=".jpg, .jpeg, .png, .pdf"
          multiple
          type="file"
        />

        {props.filetype === "file"
          ? changeFileIconStatus()
          : changeImageIconStatus()}
      </IconButton>
      {meta.value.length > 0 ? <p>{meta.value}</p> : null}
    </Stack>
  );
}

export default FileUploadField;
