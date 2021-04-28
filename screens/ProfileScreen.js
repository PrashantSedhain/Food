import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>I am profile screeen boss!</Text>
      {/* <Text>{route.params.id}</Text> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default ProfileScreen;
