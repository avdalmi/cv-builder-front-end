import React, { useState } from "react";
import { Rating } from "@mui/material";
import { useField } from "formik";

const StarRating = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Rating
      {...props}
      {...field}
      controlled="true"
      precision={0.5}
      defaultValue={0}
      value={parseInt(meta.value)}
    />
  );
};
export default StarRating;
