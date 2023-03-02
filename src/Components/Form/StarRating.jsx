import React, { useState } from "react";
import { FormHelperText, Rating } from "@mui/material";
import { useField } from "formik";

const StarRating = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <Rating
        {...props}
        {...field}
        controlled="true"
        precision={0.5}
        defaultValue={0}
        value={parseInt(meta.value)}
      />
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText error>
          Skill level must be greater or equal to 0.5
        </FormHelperText>
      ) : null}
    </div>
  );
};
export default StarRating;
