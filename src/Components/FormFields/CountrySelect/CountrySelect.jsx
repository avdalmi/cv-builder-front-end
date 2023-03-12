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
  // console.log("meta country", meta);
  const [countries, setCountries] = useState([]);
  const [sortCountries, setSortCountries] = useState([]);
  // console.log("meta", meta);
  // console.log("field", field);
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
        // style={{ textAlign: "left", backgroundColor: "thistle" }}
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

const StyledPaper = styled(Paper)(`
  height: 300px;
  `);

const StyledMenuItem = styled(MenuItem)(
  ` &:hover, &.Mui-focusVisible {
    background-color: #FF5917;
  }
    `
);

export default CountrySelect;
