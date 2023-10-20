import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchAvailableItems } from "../redux/reducers/shoppingReducer";

const HomeScreen = () => {
  const { location } = useSelector((state: RootState) => state.userReducer);
  const { availability } = useSelector(
    (state: RootState) => state.shoppingReducer
  );

  //const { categories, foods, restaurants } = availability;

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAvailableItems("400012"));
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.navigation}>
          <View
            style={{
              backgroundColor: "white",
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              flex: 4,
              gap: 10,
            }}
          >
            <Text>{`${location?.city}, ${location?.region}, ${location?.postalCode}, ${location?.country}`}</Text>
            <Text>Edit</Text>
          </View>
          <View
            style={{
              backgroundColor: "green",

              flex: 8,
            }}
          >
            <Text>Search Bar</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text>Home Screen</Text>
        </View>
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },

  container: {
    flex: 1,
    backgroundColor: "green",
  },

  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },

  navigation: {
    flex: 2,
    backgroundColor: "red",
  },
});
