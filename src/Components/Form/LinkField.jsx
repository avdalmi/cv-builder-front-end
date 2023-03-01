import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "@mui/icons-material";
import { useField } from "formik";

function LinkField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl fullWidth variant="standard">
      {/* <InputLabel>{label}</InputLabel> */}
      <TextField
        {...props}
        {...field}
        type="text"
        label={label}
        error={meta.touched && Boolean(meta.error)}
        value={meta.value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Link />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}

// {/* <FormControl fullWidth variant="standard">
//       {meta.touched && Boolean(meta.error) ? (
//         <InputLabel error>{label}</InputLabel>
//       ) : (
//         <InputLabel>{label}</InputLabel>
//       )}
//       <Select
//         error={meta.touched && Boolean(meta.error)}
//         value={meta.value}
//         {...field}
//         {...props}
//         style={{ textAlign: "left" }}
//       >
//         {sortCountries &&
//           sortCountries.map((countryName) => (
//             <MenuItem key={countryName} value={countryName}>
//               {countryName}
//             </MenuItem>
//           ))}
//       </Select>
//       {meta.touched && Boolean(meta.error) ? (
//         <FormHelperText error>{meta.error}</FormHelperText>
//       ) : null}
//       {/* <FormHelperText>{meta.error}</FormHelperText> */}
//     </FormControl> */}
export default LinkField;
