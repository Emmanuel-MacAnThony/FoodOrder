import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { FoodModel, RestaurantModel } from "../redux/types";

const screenWidth = Dimensions.get("screen").width;

interface RestaurantProps {
  item: RestaurantModel | FoodModel;
  onTap: Function;
}

const RestaurantCard: React.FC<RestaurantProps> = ({ item, onTap }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image
        style={{
          width: screenWidth - 20,
          height: 220,
          borderRadius: 20,
          backgroundColor: "#EAEAEA",
        }}
        source={require("../images/pizza.jpg")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 20,
    height: 230,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
  },
});

export { RestaurantCard };
