import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LocationGeocodedAddress } from "expo-location";
import { UserState } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: UserState = {
  user: undefined,
  location: {} as LocationGeocodedAddress,
  loading: false,
  success: false,
  error: undefined,
};

export const updateLocation = createAsyncThunk(
  "users/updateLocation",
  async (location: LocationGeocodedAddress) => {
    const locationString = JSON.stringify(location);
    await AsyncStorage.setItem("user_location", locationString);
    return location;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateLocation.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      updateLocation.fulfilled,
      (state, action: PayloadAction<LocationGeocodedAddress>) => {
        state.location = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(updateLocation.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    });
  },
});

export default userSlice.reducer;
