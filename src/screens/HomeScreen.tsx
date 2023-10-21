import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchAvailableItems } from "../redux/reducers/shoppingReducer";
import SearchBar from "../components/SearchBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackScreenProps } from "@react-navigation/stack";
import { AppParamList, HomeParamList } from "../../App";
import ButtonWithIcon from "../components/ButtonWithIcon";
import { CategoryCard } from "../components/CategoryCard";
import { RestaurantCard } from "../components/RestaurantCard";

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeParamList, "Home">,
  StackScreenProps<AppParamList>
>;

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const { location } = useSelector((state: RootState) => state.userReducer);
  const { availability } = useSelector(
    (state: RootState) => state.shoppingReducer
  );

  const { categories, foods, restaurants } = availability;

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
              gap: 5,
            }}
          >
            <Text
              style={{ fontSize: 24 }}
            >{`${location?.city}, ${location?.region}, ${location?.postalCode}, ${location?.country}`}</Text>
            <Text style={{ fontSize: 24 }}>Edit</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: 60,
              justifyContent: "space-around",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <SearchBar
              onTextChange={() => {}}
              didTouch={() => {
                navigation.navigate("Search");
              }}
            />
            <ButtonWithIcon
              onTap={() => {}}
              icon={require("../images/hambar.png")}
              width={50}
              height={40}
            />
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({ item }) => {
                return <CategoryCard item={item} onTap={() => {}} />;
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "600",
                  color: "#f15b5d",
                  marginLeft: 20,
                }}
              >
                {" "}
                Top Restaurants
              </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={restaurants}
              renderItem={({ item }) => (
                <RestaurantCard item={item} onTap={() => {}} />
              )}
              keyExtractor={(item) => `${item._id}`}
            />

            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "600",
                  color: "#f15b5d",
                  marginLeft: 20,
                }}
              >
                {" "}
                30 Minutes Foods
              </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={foods}
              renderItem={({ item }) => (
                <RestaurantCard item={item} onTap={() => {}} />
              )}
              keyExtractor={(item) => `${item._id}`}
            />
          </ScrollView>
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
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },

  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },

  navigation: {
    flex: 2,
    backgroundColor: "white",
  },
});
