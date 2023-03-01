import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
import axios from "axios";

function CountrySelect({ label, ...props }) {
  const [field, meta] = useField(props);
  const [countries, setCountries] = useState([]);
  const [sortCountries, setSortCountries] = useState([]);

  const getCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const displayCountryOptions = () => {
    const countryNameArray = [];
    countries.map((country) => countryNameArray.push(country.name.common));
    return countryNameArray.sort().map((countryName) => {
      setSortCountries(countryNameArray);
    });
  };

  useEffect(() => {
    displayCountryOptions();
  }, [countries]);

  return (
    <FormControl fullWidth variant="standard">
      {meta.touched && Boolean(meta.error) ? (
        <InputLabel error>{label}</InputLabel>
      ) : (
        <InputLabel>{label}</InputLabel>
      )}
      <Select
        error={meta.touched && Boolean(meta.error)}
        value={meta.value}
        {...field}
        {...props}
        style={{ textAlign: "left" }}
      >
        {sortCountries &&
          sortCountries.map((countryName) => (
            <MenuItem key={countryName} value={countryName}>
              {countryName}
            </MenuItem>
          ))}
      </Select>
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default CountrySelect;
//  {
//    <FormControl fullWidth variant="standard">
//    <InputLabel>{label}</InputLabel>
//    <Select  error={meta.touched && Boolean(meta.error)}
//       helperText={meta.touched && meta.error}
//       value={meta.value}{...field} {...props} style={{ textAlign: "left" }}>
//      {countries && displayCountryOptions()}
//    </Select>
//  </FormControl>
//  }
