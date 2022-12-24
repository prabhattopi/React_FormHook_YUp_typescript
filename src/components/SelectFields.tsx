import { FormControl, MenuItem, TextField } from "@mui/material";
import React from "react";
interface Props {
  label: string;
}
const SelectFields: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <TextField required select label={label} variant="filled">
        <MenuItem>None</MenuItem>
      </TextField>
    </FormControl>
  );
};

export default SelectFields;
