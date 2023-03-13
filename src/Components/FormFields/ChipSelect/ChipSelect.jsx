import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React, { useState } from "react";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
    },
  },
};

function ChipSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  const { values, setFieldValue } = useFormikContext();
  const [name, setname] = useState([]);

  const names = [];
  const skillsToArray = values.skills.map((skill) => {
    names.push(skill.name);
  });

  const handleChange = (event) => {
    setname(event.target.value);
    setFieldValue(`${props.name}`, event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-chip-label">
        Select the skills used in this project
      </InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={name}
        onChange={handleChange}
        name={props.name}
        error={meta.touched && Boolean(meta.error)}
        {...props}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="Select the skills used in this project"
          />
        }
        renderValue={(selected) => {
          return (
            <Box
              key={Math.floor(Math.random() * 400)}
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          );
        }}
        //controls the height of the dropdown
        MenuProps={MenuProps}
      >
        {names.map((skill) => (
          <MenuItem key={skill} value={skill}>
            {skill}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default ChipSelect;
