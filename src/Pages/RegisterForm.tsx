import { Avatar, Button, InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TextFields from "../components/TextFields";
import SelectFields from "../components/SelectFields";

import { useForm } from "react-hook-form";
import CheckBoxFields from "../components/CheckBoxFields";
import { pawdRegExp, phoneRegExp } from "../Utils";
interface Default {
  fullname: string;
  email: string;
  mobile: string;
  country: string;
  password: string;
  confirmpassword: string;
  privacy: boolean;
}
//schema Validation
const schema = yup.object({
  fullname: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required").email(),
  mobile: yup
    .string()
    .required("Mobile Phone is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
  privacy: yup.bool().oneOf([true], "Field must be checked"),
});
const RegisterForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Default>({
    defaultValues: {
      fullname: "",
      email: "",
      mobile: "",
      country: "",
      password: "",
      confirmpassword: "",
      privacy: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4rem",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HowToRegIcon />
      </Avatar>
      <Typography component="h1">Sign Up</Typography>
      <Box
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ width: "100%", mt: "2rem" }}
      >
        <TextFields
          errors={errors}
          control={control}
          name="fullname"
          label="Full Name"
        />
        <TextFields
          errors={errors}
          control={control}
          name="email"
          label="Email"
        />
        <TextFields
          errors={errors}
          control={control}
          name="mobile"
          label="Mobile Phone"
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
            type: "number",
          }}
        />
        <SelectFields
          errors={errors}
          control={control}
          name="country"
          label="Country"
        />
        <TextFields
          errors={errors}
          control={control}
          name="password"
          label="Password"
        />
        <TextFields
          errors={errors}
          control={control}
          name="confirmpassword"
          label="Confirm Password"
        />
        <CheckBoxFields errors={errors} control={control} name="privacy" />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: "3", mb: "2" }}
        >
          Sigu up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
