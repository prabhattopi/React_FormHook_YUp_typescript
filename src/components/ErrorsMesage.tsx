import { Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import React from "react";
interface Porps {
  message: string;
}
const ErrorsMesage: React.FC<Porps> = (props) => {
  const { message } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "5px", mt: "6px" }}>
      <ErrorIcon color="error" sx={{ width: "20px" }} />
      <Typography color="error.main" variant="h4" fontSize="14px">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorsMesage;
