import React from "react";
import { useField } from "formik";
import { Stack, Button, InputLabel } from "@mui/material";
import { AddAPhoto, DownloadDone, UploadFile } from "@mui/icons-material";

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
      return <AddAPhoto />;
    }
  };

  const acceptedFileTypes = () => {
    if (props.filetype === "file") {
      return ".jpg, .jpeg, .png, .pdf";
    } else {
      return ".jpg, .jpeg, .png";
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        height: "50px",
        margin: "5px 0",
      }}
    >
      <InputLabel>{label}</InputLabel>
      <input
        {...field}
        {...props}
        hidden
        accept={acceptedFileTypes()}
        multiple
        type="file"
        id={props.name}
      />
      <label htmlFor={props.name}>
        <Button
          variant="outlined"
          component="span"
          startIcon={
            props.filetype === "file"
              ? changeFileIconStatus()
              : changeImageIconStatus()
          }
        >
          {meta.value.length > 0 ? "Success!" : "Upload"}
        </Button>
      </label>
      {meta.value.length > 0 ? <p>{meta.value}</p> : null}
    </Stack>
  );
}

export default FileUploadField;
