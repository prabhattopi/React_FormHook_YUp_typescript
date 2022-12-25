import { FormControl, MenuItem, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
interface Props {
  label: string;
  control: any;
  name: string;
}
const SelectFields: React.FC<Props> = (props) => {
  const { label, control, name } = props;
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField {...field} required select label={label} variant="filled">
            <MenuItem value="India">None</MenuItem>
          </TextField>
        )}
      />
    </FormControl>
  );
};

export default SelectFields;
