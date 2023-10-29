import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk(
  "admin/signIn",
  async (signData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/admin/signin",
        signData
      );

      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        return rejectWithValue({ error: error.response.data });
      }
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.data = null;
        state.status = "failed";
        state.error = action.payload; 
      });
  },
});

export default adminSlice.reducer;
