import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TitleComponent = (props) => {
  return <Text style={styles.titleStyle}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "black",
  },
});

export default TitleComponent;
