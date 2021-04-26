import axios from "axios";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const TitleComponent = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      {props.viewAll ? (
        <TouchableOpacity onPress={props.navigate}>
          <View style={{ display: "flex" }}>
            <Text style={styles.buttonStyle}>See All</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "black",
  },

  viewStyle: {
    flexDirection: "row",
    // borderWidth: 1,
    borderColor: "black",
    display: "flex",
  },

  buttonStyle: {
    fontSize: 15,
    margin: 10,
    marginTop: 14,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});

export default TitleComponent;
