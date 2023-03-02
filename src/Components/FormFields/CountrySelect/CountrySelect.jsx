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
        defaultValue=""
      >
        {/* <StyledPaper> */}
        {sortCountries &&
          sortCountries.map((countryName) => (
            <MenuItem key={countryName} value={countryName}>
              {countryName}
            </MenuItem>
          ))}
        {/* </StyledPaper> */}
      </Select>
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
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
