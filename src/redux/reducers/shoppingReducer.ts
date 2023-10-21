import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FoodAvailability, ShoppingState } from "../types";
//import axios from "axios";
import { create } from "apisauce";
import { BASE_URL } from "../../utils/constants";

// define the api
const api = create({
  baseURL: "http://192.168.82.237:8888",
  headers: { Accept: "application/json" },
});

export const fetchAvailableItems = createAsyncThunk(
  "shopping/fetchAvailableItems",
  async (postalCode: string) => {
    const response = await api.get<FoodAvailability>(
      `/food/availability/400012`
    );

    return response.data as FoodAvailability;
  }
);

const initialState: ShoppingState = {
  availability: {} as FoodAvailability,
  loading: false,
  success: false,
  error: undefined,
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAvailableItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchAvailableItems.fulfilled,
      (state, action: PayloadAction<FoodAvailability>) => {
        state.availability = action.payload;
        state.loading = false;
        console.log(action.payload, "success");
      }
    );

    builder.addCase(fetchAvailableItems.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "Something went wrong";
    });
  },
});

export default shoppingSlice.reducer;
