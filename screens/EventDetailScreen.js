import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import MyCarousel from "../components/MyCarousel";

const EventDetailScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      {/* <Text>{route.params.id}</Text> */}
      <MyCarousel />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default EventDetailScreen;
