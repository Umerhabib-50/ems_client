import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomInput from "../components/customInput";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { createEmployee } from "../services/adminService";

export default function CreateEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // react hook from setup
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    data.date = dayjs(data.date).format("YYYY-MM-DD");
    const result = await createEmployee(data);
    console.log("create result", result);
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
          Create Employee
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
            name={"name"}
            errors={errors}
            label="Name"
          />
          <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"email"}
            errors={errors}
            label="Email Address"
            pattern={/^\S+@\S+\.\S+$/}
          />

          <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"password"}
            errors={errors}
            label="Password"
          />
          <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"department"}
            errors={errors}
            label="Department"
          />
          <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"position"}
            errors={errors}
            label="Position"
          />

          <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"salary"}
            errors={errors}
            label="Salary"
          />

          <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"date"}
            errors={errors}
            label="Joining Date"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
