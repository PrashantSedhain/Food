import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, SafeAreaView, View } from "react-native";

import BottomTabNavigator from "./navigation/TabNavigator";

function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
