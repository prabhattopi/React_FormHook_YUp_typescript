import { FormControl, TextField } from "@mui/material";
import React from "react";

import { Controller } from "react-hook-form";

interface Props {
  label: string;
  inputProps?:any;
  control: any;
  name: string;
}
const TextFields: React.FC<Props> = (props) => {
  const { label, inputProps, control, name } = props;

  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
          {...field}
            required
            label={label}
            variant="filled"
            InputProps={inputProps}
          />
        )}
      />
    </FormControl>
  );
};

export default TextFields;
