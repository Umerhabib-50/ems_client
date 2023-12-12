import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
// hook form
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

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
  render,
  pattern,
  label,
  type,
}) => {
  const [showPassword, setShowPassword] = React.useState(
    name === "password" ? false : true
  );
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const currentDate = dayjs();

  if (name === "date") {
    return (
      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        defaultValue={currentDate}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={value}
                label={label}
                sx={[styles, { width: "100%" }]}
                onChange={(newValue) => onChange(dayjs(newValue))}
              />
            </DemoContainer>
          </LocalizationProvider>
        )}
      />
    );
  }

  if (type === "date") {
    return (
      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        defaultValue={currentDate}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={value}
                label={label}
                sx={[styles, { width: "100%" }]}
                onChange={(newValue) => onChange(dayjs(newValue))}
              />
            </DemoContainer>
          </LocalizationProvider>
        )}
      />
    );
  }

  if (render) {
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
          render={render}
        />
      </>
    );
  }

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
