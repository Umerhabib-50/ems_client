// slices/adminSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk for fetching data from the API
export const fetchEmployees = createAsyncThunk(
  "admin/fetchEmployees",
  async () => {
    const token = "umer";
    const response = await fetch("", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
