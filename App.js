import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";

import React from "react";
import { StyleSheet, Text, TextInput, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flexDirection: "row",
        // borderWidth: 1,
        margin: 15,
        height: 50,
        marginTop: 50,
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
        style={styles.inputStyle}
        placeholder="Search Restaurants"
        placeholderTextColor="white"
      />
    </View>
  );
}

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
