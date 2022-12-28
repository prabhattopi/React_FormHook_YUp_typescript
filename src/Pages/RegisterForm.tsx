import { Avatar, Button, InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";

import HowToRegIcon from "@mui/icons-material/HowToReg";
import TextFields from "../components/TextFields";
import SelectFields from "../components/SelectFields";

import { useForm } from "react-hook-form";
import CheckBoxFields from "../components/CheckBoxFields";
interface Default {
  fullname: string;
  email: string;
  mobile: string;
  country: string;
  password: string;
  confirmpassword: string;
  privacy: boolean;
}
const RegisterForm = () => {
  const { handleSubmit, control } = useForm<Default>({
    defaultValues: {
      fullname: "",
      email: "",
      mobile: "",
      country: "",
      password: "",
      confirmpassword: "",
      privacy: true,
    },
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
        <TextFields control={control} name="fullname" label="Full Name" />
        <TextFields control={control} name="email" label="Email" />
        <TextFields
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
        <SelectFields control={control} name="country" label="Country" />
        <TextFields control={control} name="password" label="Password" />
        <TextFields
          control={control}
          name="confirmpassword"
          label="Confirm Password"
        />
        <CheckBoxFields control={control} name="privacy" />
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
