import React from "react";
import { useField } from "formik";
import { Stack, Button, InputLabel } from "@mui/material";
import { AddAPhoto, DownloadDone, UploadFile } from "@mui/icons-material";
import { Box } from "@mui/system";

function FileUploadField({ label, ...props }) {
  const [field, meta] = useField(props);
  // console.log("props", props);
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

  // const Thumb = () => {
  //   if (meta.value.length > 0) {
  //     return;
  //   } else {
  //     let reader = new FileReader();
  //     reader.onload = (e) => {
  //       console.log(e.target.result);
  //     };
  //     // return reader.readAsDataURL(meta.value);
  //   }
  // };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      // spacing={2}
      sx={{
        // bgcolor: "pink",
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
      {/* {meta.value.length > 0 && (
        <Box mt={2} textAlign="center">
          <div>Image preview</div>
          <img src={meta.value} alt="profile preview" height="100px" />
        </Box>
      )} */}
      {meta.value.length > 0 ? <p>{meta.value}</p> : null}
      {/* <Thumb /> */}
    </Stack>
  );
}

export default FileUploadField;
