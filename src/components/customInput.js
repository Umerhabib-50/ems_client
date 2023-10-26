import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";

// hook form
import { Controller } from "react-hook-form";

const CustomInput = ({
  styles,
  control,
  rules,
  name,
  defaultValue,
  placeholder,
  errors,
  errorMessage,
  password,
  keyboardType,
  maxNumber,
  inputIcon,
  search,
  edit = true,
  pattern,
  label,
}) => {
  const [showPassword, setShowPassword] = React.useState(
    name === "password" ? false : true
  );
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: pattern,
            message: "Enter Valid Email",
          },
        }}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, onFocus, value } }) => (
          <TextField
            fullWidth
            sx={[styles]}
            value={value}
            onChange={onChange}
            label={label}
            type={showPassword ? "text" : "password"}
            helperText={
              errors[name] && (
                <p
                  style={{ color: "red", fontSize: 14, margin: 0, padding: 0 }}
                >
                  {errors[name].message === ""
                    ? `${label} is required`
                    : errors[name].message}
                </p>
              )
            }
            InputProps={{
              endAdornment:
                name === "password" ? (
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ) : null,
            }}
          />
        )}
      />
    </>
  );
};

export default CustomInput;
