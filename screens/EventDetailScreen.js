import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AboutComponent from "../components/AboutComponent";
import BuyBottonComponent from "../components/BuyButtonComponent";
import MyCarousel from "../components/MyCarousel";
import TimeComponent from "../components/TimeComponent";

const EventDetailScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <ScrollView>
        <MyCarousel />
        <AboutComponent />
        <TimeComponent />
        <BuyBottonComponent />
      </ScrollView>
      {/* <Text>{route.params.id}</Text> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    margin: 8,
  },
});
export default EventDetailScreen;
