import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import { AppParamList } from "../../App";

const SCREEN_WIDTH = Dimensions.get("screen").width;

type Props = NativeStackScreenProps<AppParamList, "Landing">;

const LandingScreen: React.FC<Props> = ({ route, navigation }) => {
  //const navigation = useNavigation();
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
  const [displayAddress, setDisplayAddress] = useState(
    "Waiting for current location"
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location: any = await Location.getCurrentPositionAsync({});
      const { coords } = location;
      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        for (let item of addressResponse) {
          setAddress(item);
          let currentAddress = `${item.city}, ${item.region}, ${item.postalCode}, ${item.country}`;
          if (currentAddress?.length > 0) {
            setTimeout(() => {
              navigation.navigate("HomeNav");
            }, 2000);
          }
          setDisplayAddress(currentAddress);
          return;
        }
      } else {
        // notify user something went wrong
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.delivery_icon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}> {displayAddress} </Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  addressContainer: {
    width: SCREEN_WIDTH - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },

  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4F4F4F",
  },

  addressTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#707070",
  },

  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "rgba(242, 242, 242, 1)",
  },

  delivery_icon: {
    width: 120,
    height: 120,
  },

  footer: {
    flex: 1,
  },

  navigation: {
    flex: 2,
  },
});
