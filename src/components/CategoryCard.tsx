import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { CategoryModel } from "../redux/types";

interface CategoryProps {
  item: CategoryModel;
  onTap: Function;
}
const CategoryCard: React.FC<CategoryProps> = ({ item, onTap }) => {
  console.log(
    `${item.title.toLowerCase().substring(0, item.title.length - 1)}.jpg`
  );
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image
        source={require(`../images/burger.jpg`)}
        style={{
          width: 120,
          height: 120,
          borderRadius: 20,
          backgroundColor: "#EAEAEA",
        }}
      />
      <Text style={{ fontSize: 14, marginTop: 10, color: "#858585" }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 140,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
  },
});

export { CategoryCard };
