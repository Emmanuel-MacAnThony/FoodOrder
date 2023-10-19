import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>navigation</Text>
      </View>
      <View style={styles.body}>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </View>
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
