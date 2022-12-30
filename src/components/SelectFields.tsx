import { FormControl, Menu, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

import ErrorsMesage from "./ErrorsMesage";
interface Props {
  label: string;
  control: any;
  name: string;
  errors: any;
}

interface Array {
  name: {
    common: string;
  };
}

const SelectFields: React.FC<Props> = (props) => {
  const [listCountry, setListCountry] = useState<Array[]>([]);
  // console.log(listCountry);

  const fetchData = async () => {
    let res = await fetch(`https://restcountries.com/v3.1/all`);
    let resdata = await res.json();
    setListCountry(resdata);
  };
  useEffect(() => {
    fetchData();

    return () => {
      fetchData;
    };
  }, []);

  const countryNames =
    listCountry && listCountry.map((item) => item.name.common).sort();
  // console.log(countryNames);
  const { label, control, name, errors } = props;
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            error={!!errors[name]}
            {...field}
            required
            select
            label={label}
            variant="filled"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {countryNames.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      {errors[name] ? <ErrorsMesage message={errors[name].message} /> : ""}
    </FormControl>
  );
};

export default SelectFields;
