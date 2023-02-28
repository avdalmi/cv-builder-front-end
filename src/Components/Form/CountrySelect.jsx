import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useField } from "formik";
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

  const displayCountryOptions = () => {
    const countryNameArray = [];
    countries.map((country) => countryNameArray.push(country.name.common));
    return countryNameArray.sort().map((countryName) => {
      return (
        <MenuItem key={countryName} value={countryName}>
          {countryName}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select {...field} {...props} style={{ textAlign: "left" }}>
        {countries && displayCountryOptions()}
      </Select>
    </FormControl>
  );
}

export default CountrySelect;
