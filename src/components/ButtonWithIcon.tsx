import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ImageSourcePropType } from "react-native";

interface Props {
  onTap: Function;
  width: number;
  height: number;
  icon: ImageSourcePropType;
}

const ButtonWithIcon: React.FC<Props> = ({ onTap, width, height, icon }) => {
  return (
    <TouchableOpacity style={[styles.btn, { width, height }]}>
      <Image source={icon} style={{ width: width - 2, height: height - 2 }} />
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 60,
    height: 40,
  },
});
