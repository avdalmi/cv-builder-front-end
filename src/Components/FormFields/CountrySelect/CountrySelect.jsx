import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Paper,
  styled,
} from "@mui/material";

import { useField } from "formik";
import axios from "axios";
import { FormControlStyled, SelectFieldStyled } from "../Styles/StyleSheet";

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
    <FormControlStyled fullWidth variant="standard">
      {meta.touched && Boolean(meta.error) ? (
        <InputLabel dense="true" htmlFor="country-select" error>
          {label}
        </InputLabel>
      ) : (
        <InputLabel htmlFor="country-select" dense="true">
          {label}
        </InputLabel>
      )}
      <SelectFieldStyled
        {...field}
        labelId="country-select"
        {...props}
        error={meta.touched && Boolean(meta.error)}
        value={meta.value}
        MenuProps={{
          PaperProps: {
            style: {
              height: 300,
            },
          },
        }}
      >
        {sortCountries &&
          sortCountries.map((countryName) => (
            <MenuItem key={countryName} value={countryName}>
              {countryName}
            </MenuItem>
          ))}
      </SelectFieldStyled>
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControlStyled>
  );
}

export default CountrySelect;
