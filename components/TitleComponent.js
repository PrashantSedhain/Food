import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TitleComponent = (props) => {
  return <Text style={styles.titleStyle}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 4,
    color: "black",
  },
});

export default TitleComponent;
