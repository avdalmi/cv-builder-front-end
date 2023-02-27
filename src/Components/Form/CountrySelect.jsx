import React, { useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useField, Field } from "formik";
import axios from "axios";

function CountrySelect({ label, ...props }) {
  const [field, meta] = useField(props);
  const [countries, setCountries] = useState("");

  const getCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>Country</InputLabel>
      <Select {...field} {...props}>
        {countries &&
          countries.map((country, index) => {
            // console.log("country", country.name.common);
            return (
              <MenuItem key={country.name.common} value={country.name.common}>
                {country.name.common}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
}
// {
//   /* <Field style={{ width: 550, height: 50 }} {...field} {...props}>
// <MenuItem value="" disabled>
//   select country
// </option>
// {countries &&
//   countries.map((country, index) => {
//     //   console.log("country", country.name.common);
//     return (
//       <option key={country.name.common} value={country.name.common}>
//         {country.name.common}
//       </option>
//     );
//   })}
// </Field> */
// }
export default CountrySelect;