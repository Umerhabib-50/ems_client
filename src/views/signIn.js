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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { signIn } from "../redux/adminSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);

  // react hook from setup
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  React.useEffect(() => {
    // const role = "admin";
    // if (role === "employee") {
    //   navigate("/employee");
    // }
    // if (role === "admin") {
    //   navigate("/admin");
    // }
    // if (data?.data?.data) {
    //   localStorage.setItem("token", data?.data?.data);
    //   navigate("/");
    // }
    const token = true;
    const role = "admin";
    if (token && role) {
      navigate("/");
    }
  }, [data?.data?.data]);
  const onSubmit = async (data) => {
    dispatch(signIn(data));
    // try {
    //   const res = await axios.post(
    //     "http://localhost:5000/api/v1/admin/signin",
    //     data
    //   );
    //   console.log("res.data", res.data);
    // } catch (error) {
    //   console.log("error from here", error);
    // }
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
          Sign in
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
          <Grid container>
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
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
