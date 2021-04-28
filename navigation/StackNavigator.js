import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ViewAllScreen from "../screens/ViewAllScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
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
        name="EventDetailScreen"
        component={EventDetailScreen}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "left" }}>
      <Stack.Screen
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ProfileStackNavigator };
