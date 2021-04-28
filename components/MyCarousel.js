import React from "react";
import { ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const MyCarousel = (props) => {
  return (
    <ScrollView style={styles.scrollVIewStyle}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        // snapToInterval={Dimensions.get("window").width}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "https://images.unsplash.com/photo-1472152083436-a6eede6efad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "https://images.unsplash.com/photo-1472152083436-a6eede6efad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "https://images.unsplash.com/photo-1472152083436-a6eede6efad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: Dimensions.get("window").width,
    height: 300,
    justifyContent: "center",
  },
  scrollVIewStyle: {
    margin: 6,
  },
});

export default MyCarousel;
