import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ViewAllScreen from "../screens/ViewAllScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

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
          title: "View All",
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
        name="ViewAllScreen"
        component={ViewAllScreen}
      />
    </Stack.Navigator>
  );
};

// const ContactStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Contact" component={ViewAllScreen} />
//     </Stack.Navigator>
//   );
// };

export { MainStackNavigator };
