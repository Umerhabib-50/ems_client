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
import { signIn } from "../redux/adminSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);
  console.log(data);

  // react hook from setup
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  React.useEffect(() => {
    if (data?.data?.token) {
      localStorage.setItem("token", data?.data?.token);
      localStorage.setItem("allowedRoles", data?.data?.role);
    }
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [data]);

  const onSubmit = async (data) => {
    dispatch(signIn(data));
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
