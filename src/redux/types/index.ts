import { LocationGeocodedAddress } from "expo-location";

export interface CategoryModel {
  title: string;
  icon: string;
  id: string;
}

// Food Model

export interface FoodModel {
  _id: string;
  name: string;
  description: String;
  category: String;
  price: number;
  readyTime: number;
  images: [string];
}

// Restaurant Model
export interface RestaurantModel {
  _id: string;
  foodType: string;
  name: string;
  address: string;
  phone: string;
  images: string;
  foods: [FoodModel];
}

export interface FoodAvailability {
  categories: [CategoryModel];
  restaurants: [RestaurantModel];
  foods: [FoodModel];
}

export interface UserModel {
  firstname: string;
  lastname: string;
  contactNumber: string;
  token: string;
}

export interface UserState {
  user: UserModel | undefined;
  location: LocationGeocodedAddress;
  error: string | undefined;
  loading: boolean;
  success: boolean;
}

export interface ShoppingState {
  availability: FoodAvailability;
  error: string | undefined;
  loading: boolean;
  success: boolean;
}
