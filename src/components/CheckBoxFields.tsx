import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
interface Props {
  name: string;
  control: any;
}
const CheckBoxFields: React.FC<Props> = (props) => {
  const { name, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} defaultChecked />}
          label="I Agree to MyApp Terms and Policies"
        />
      )}
    />
  );
};

export default CheckBoxFields;
