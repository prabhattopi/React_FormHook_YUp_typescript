import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
interface Props {
  control: any;
  name: string;
}
const CheckBox: React.FC<Props> = (props) => {
  const { control, name } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={(field) => (
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I Agree to MyApp Terms and Policies"
          />
        )}
      />
    </>
  );
};

export default CheckBox;
