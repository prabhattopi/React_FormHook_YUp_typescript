import { FormControl, TextField } from "@mui/material";
import React from "react";
import { Label } from "../Interface";
interface Props {
  label: string;
  inputProps?: {};
}
const TextFields: React.FC<Props> = (props) => {
  const { label, inputProps } = props;
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <TextField
        required
        label={label}
        variant="filled"
        InputProps={inputProps}
      />
    </FormControl>
  );
};

export default TextFields;
