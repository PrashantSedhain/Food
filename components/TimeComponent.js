import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const TimeComponent = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerStyle}>I will be the time component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  viewStyle: {
    marginLeft: 5,
    marginRight: 5,
  },
});

export default TimeComponent;
