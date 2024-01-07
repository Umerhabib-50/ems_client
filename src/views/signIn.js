import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomInput from "../components/customInput";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedRole, setSelectedRole] = React.useState("admin");

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("allowedRoles");
    if (token) {
      if (role === "1000") {
        navigate("/");
      } else if (role === "2000") {
        navigate("/employee");
      }
    }
  }, [navigate, location.pathname]);

  const onSubmit = async (data) => {
    console.log("data", data);

    try {
      const apiEndpoint =
        selectedRole === "admin" ? "admin/signin" : "employee/signin";

      const res = await axios.post(
        `http://localhost:5000/api/v1/${apiEndpoint}`,
        data
      );

      if (res?.data?.data?.token) {
        const employeeData = res.data.data.employee;
        console.log(employeeData);
        const role = res?.data?.data?.role[0];
        localStorage.setItem("token", res?.data?.data?.token);
        localStorage.setItem("allowedRoles", role);
        if (employeeData) {
          localStorage.setItem("name", employeeData.name);
          localStorage.setItem("email", employeeData.email);
          localStorage.setItem("position", employeeData.position);
          localStorage.setItem("salary", employeeData.salary);
          localStorage.setItem("department", employeeData.department);
          localStorage.setItem("date", employeeData.date);
          localStorage.setItem("userid", employeeData._id);
        }

        if (role === 1000) {
          navigate("/");
        } else if (role === 2000) {
          navigate("/employee");
        }
      }
    } catch (error) {
      // Handle error
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials. Please try again.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  const handleRoleToggle = () => {
    setSelectedRole((prevRole) =>
      prevRole === "admin" ? "employee" : "admin"
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in as {selectedRole.toUpperCase()}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <CustomInput
            control={control}
            name={"email"}
            errors={errors}
            label="Email Address"
            pattern={/^\S+@\S+\.\S+$/}
          />
          <CustomInput
            styles={{ mt: 2 }}
            control={control}
            name={"password"}
            errors={errors}
            label="Password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}

          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={handleRoleToggle}
          >
            {`Switch to ${selectedRole === "admin" ? "Employee" : "Admin"}`}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
