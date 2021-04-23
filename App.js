import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, TextInput, SafeAreaView, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "left" }}>
        <Stack.Screen
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{
            title: "Event Details",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: null,
            },
            headerTitleAlign: "center",
          }}
          // options={{ headerShown: false }}
          name="DetailScreen"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
