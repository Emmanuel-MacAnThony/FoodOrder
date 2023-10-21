import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import OfferScreen from "./src/screens/OfferScreen";
import CartScreen from "./src/screens/CartScreen";
import AccountScreen from "./src/screens/AccountScreen";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigatorScreenParams } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";

export type HomeParamList = {
  Home: undefined;
  Cart: undefined;
  Offer: undefined;
  Account: undefined;
};

export type AppParamList = {
  HomeNav: NavigatorScreenParams<HomeParamList>;
  Landing: undefined;
  Search: undefined;
};

const Stack = createStackNavigator<AppParamList>();

const TabNavigator = createBottomTabNavigator<HomeParamList>();

const Home = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === "Home") {
            icon =
              focused === true
                ? require("./src/images/home_icon.png")
                : require("./src/images/home_n_icon.png");
          } else if (route.name === "Offer") {
            icon =
              focused === true
                ? require("./src/images/offer_icon.png")
                : require("./src/images/offer_n_icon.png");
          } else if (route.name === "Cart") {
            icon =
              focused === true
                ? require("./src/images/cart_icon.png")
                : require("./src/images/cart_n_icon.png");
          } else if (route.name === "Account") {
            icon =
              focused === true
                ? require("./src/images/account_icon.png")
                : require("./src/images/account_n_icon.png");
          }
          return <Image source={icon} style={styles.tabIcon} />;
        },
        headerShown: false,
      })}
    >
      <TabNavigator.Screen name="Home" component={HomeScreen} />
      <TabNavigator.Screen name="Offer" component={OfferScreen} />
      <TabNavigator.Screen name="Cart" component={CartScreen} />
      <TabNavigator.Screen name="Account" component={AccountScreen} />
    </TabNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="HomeNav" component={Home} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  tabIcon: {
    width: 30,
    height: 30,
  },
});
