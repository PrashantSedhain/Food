import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

const CardComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.navigate} style={styles.cardStyle}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/food.jpg")}
      ></Image>
      <Text style={{ fontWeight: "bold", margin: 5 }}>
        Riyaj Restaurant & Spa
      </Text>
      <Text style={{ color: "black", margin: 3 }}>$1.49 Delivery Fee</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    width: 200,
    height: 170,
    // borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "gray",
    shadowOpacity: 0.5,
    elevation: 3,
    zIndex: 1,
    borderRadius: 10,
  },

  imageStyle: {
    height: 120,
    width: 200,
    // flex: 1,
    borderRadius: 5,
  },
});

export default CardComponent;
