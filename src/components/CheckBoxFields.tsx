import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

import ErrorsMesage from "./ErrorsMesage";
interface Props {
  name: string;
  control: any;
  errors: any;
}
const CheckBoxFields: React.FC<Props> = (props) => {
  const { name, control, errors } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} required />}
            label="I Agree to MyApp Terms and Policies"
          />
        )}
      />
      {errors[name] ? <ErrorsMesage message={errors[name].message} /> : ""}
    </>
  );
};

export default CheckBoxFields;
