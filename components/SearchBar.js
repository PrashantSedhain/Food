import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        height: 45,
        marginTop: 10,
        marginHorizontal: 10,
        borderColor: "black",
        backgroundColor: "#c2bcbc",
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
        placeholder="Search Events, Venues"
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
