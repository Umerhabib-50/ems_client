import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomInput from "../../components/customInput";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Applyloan() {
  // react hook from setup
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const userId = localStorage.getItem("userid");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/employee/apply/loan",
        {
          userId,
          name,
          email,
          amount: data.amount,
        }
      );

      // Handle success
      alert("Loan application submitted successfully!");
    } catch (error) {
      // Handle error
      console.error("Error submitting loan application:", error);
      alert("Error submitting loan application. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <BorderColorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Apply Loan
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"amount"}
            errors={errors}
            label="Amount"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
