import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const BuyBottonComponent = (props) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        style={{
          borderRadius: 9,
          width: 200,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#f4511e",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Buy Tickets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 5,
    marginRight: 5,
  },
});

export default BuyBottonComponent;
