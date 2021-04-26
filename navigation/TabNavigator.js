import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "My Tickets") {
            iconName = focused ? "wallet" : "wallet";
          } else if (route.name === "Explore") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "Sell") {
            iconName = focused ? "send" : "send";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Explore" component={MainStackNavigator} />

      <Tab.Screen name="My Tickets" component={MainStackNavigator} />
      <Tab.Screen name="Sell" component={MainStackNavigator} />

      <Tab.Screen name="Profile" component={MainStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
