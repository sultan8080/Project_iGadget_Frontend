import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk(
    "profile/fetchUserProfile",
    async (userId, thunkAPI) => {
      try {
        const response = await fetch(`/api/user/${userId}`);
        const data = await response.json();
  
        return data;
      } catch (error) {
        throw error;
      }
    }
  );
  