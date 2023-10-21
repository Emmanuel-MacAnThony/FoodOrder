import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native";

interface SearchBarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  onTextChange: Function;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onTextChange,
  onEndEditing,
  autoFocus,
  didTouch,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require("../images/search.png")}
          style={{ width: 25, height: 25 }}
        />
        <TextInput
          autoFocus={autoFocus}
          onTouchStart={didTouch}
          onChangeText={(text) => onTextChange(text)}
          onEndEditing={onEndEditing}
          style={{
            marginLeft: 5,
            fontSize: 20,
            height: 42,
            flex: 9,
            display: "flex",
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBar: {
    display: "flex",
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ededed",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#E5E5E5",
    borderWidth: 2,
    flex: 1,
  },
});
