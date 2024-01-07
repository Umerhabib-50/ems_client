import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

export default function ApplyAsset() {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [selectedType, setSelectedType] = useState("");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const onSubmit = async (data) => {
    const userId = localStorage.getItem("userid");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/employee/apply/asset",
        {
          employeeId: userId,
          name: data.name,
          type: selectedType,
        }
      );

      // Handle success
      alert("Asset application submitted successfully!");
      if (response.data.success) {
        navigate("/employee");
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting asset application:", error);
      alert("Error submitting asset application. Please try again.");
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
          Apply Asset
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <div style={{ marginBottom: 11 }}>
            <CustomInput
              styles={{ mb: 2 }}
              control={control}
              name={"name"}
              errors={errors}
              label="Asset Name"
              type="text"
            />
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel className="select-label" id="asset-type-label">
                Select Asset Type
              </InputLabel>
              <Select
                labelId="asset-type-label"
                id="asset-type"
                value={selectedType}
                onChange={handleChange}
              >
                {["Bike", "Car", "Laptop", "Mobile"].map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* <div style={{ marginBottom: 10 }}>
            <CustomInput
              styles={{ mb: 2 }}
              control={control}
              name={"issueDate"}
              errors={errors}
              label="Issue Date"
              type="date"
            />
          </div> */}

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
