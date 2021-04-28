import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AboutComponent from "../components/AboutComponent";
import MyCarousel from "../components/MyCarousel";

const EventDetailScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <ScrollView>
        <MyCarousel />
        <AboutComponent />
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
