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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import "./applyleave.css";
import { useNavigate } from "react-router-dom";

export default function ApplyLeave() {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const onSubmit = async (data) => {
    const userId = localStorage.getItem("userid");

    // Convert date strings to Date objects
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/employee/apply/leave",
        {
          employeeId: userId,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          reason: data.reason,
          leaveType: selectedValue,
        }
      );

      // Handle success
      alert("Leave application submitted successfully!");
      if (response.data.success) {
        navigate("/employee");
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting leave application:", error);
      alert("Error submitting leave application. Please try again.");
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
          Apply Leave
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <div style={{ marginBottom: 10 }}>
            <CustomInput
              styles={{ mb: 2 }}
              control={control}
              name={"startDate"}
              errors={errors}
              label="Start Date"
              type="date"
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <CustomInput
              styles={{ mb: 2 }}
              control={control}
              name={"endDate"}
              errors={errors}
              label="End Date"
              type="date"
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <CustomInput
              control={control}
              name={"reason"}
              errors={errors}
              label="Reason"
            />
          </div>
          {/* <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"leaveType"}
            errors={errors}
            label="Leave Type"
          /> */}

          {/* <CustomInput
            styles={{ mb: 2 }}
            control={control}
            name={"leaveType"}
            errors={errors}
            // label="Leave Type"
            render={({ field }) => (
              <Select {...field} label="Leave Type" style={{ color: "black" }}>
                {["Sick", "Casual", "Annual", "Other"].map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            )}
          /> */}

          <div className="select-container">
            <FormControl fullWidth>
              <InputLabel className="select-label" id="my-select-label">
                Select Leave Type
              </InputLabel>
              <Select
                labelId="my-select-label"
                id="my-select"
                value={selectedValue}
                onChange={handleChange}
              >
                <MenuItem value="Sick">Sick</MenuItem>
                <MenuItem value="Casual">Casual</MenuItem>
                <MenuItem value="Annual">Annual</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>

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
