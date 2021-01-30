import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { DefaultTheme } from "@react-navigation/native";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        height: 50,
        marginTop: 10,
        backgroundColor: "gray",
        borderRadius: 10,
      }}
    >
      <EvilIcons
        style={styles.iconStyle}
        name="search"
        size={45}
        color="white"
      />
      <TextInput
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        value={term}
        style={styles.inputStyle}
        placeholder="Search Restaurants"
        placeholderTextColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "left",
    color: "white",
  },

  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
