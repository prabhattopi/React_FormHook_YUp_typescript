import { FormControl, TextField } from "@mui/material";
import React from "react";

import { Controller } from "react-hook-form";

import ErrorsMesage from "./ErrorsMesage";

interface Props {
  label: string;
  inputProps?: any;
  control: any;
  name: string;
  errors: any;
}
const TextFields: React.FC<Props> = (props) => {
  const { label, inputProps, control, name, errors } = props;

  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors[name]}
            required
            label={label}
            variant="filled"
            InputProps={inputProps}
          />
        )}
      />
      {errors[name] ? <ErrorsMesage message={errors[name].message} /> : ""}
    </FormControl>
  );
};

export default TextFields;
