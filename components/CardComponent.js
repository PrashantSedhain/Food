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
  let Image_Http_URL = {
    uri: props.imageURL,
  };

  return (
    <TouchableOpacity onPress={props.navigate} style={styles.cardStyle}>
      <Image style={styles.imageStyle} source={Image_Http_URL}></Image>
      <Text style={{ fontWeight: "bold", marginTop: 5, color: "#f4511e" }}>
        Fri, Jul 23, 2021 - 12:59 pm
      </Text>
      <Text style={{ fontWeight: "bold", marginTop: 3, color: "black" }}>
        Rolling loud music festival outside Rangasala with Bipul Chettri, Swo...
      </Text>
      <Text style={{ fontWeight: "bold", marginTop: 3, color: "#c4c4c4" }}>
        Gongabu, Kathmandu
      </Text>
      {/* <Text style={{ color: "black", margin: 3 }}>$1.49 Delivery Fee</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    width: 300,
    height: 200,
    // borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#F2F2F2",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "gray",
    // shadowOpacity: 0.5,
    elevation: 3,
    zIndex: 1,
    borderRadius: 10,
  },

  imageStyle: {
    height: 120,
    width: 300,
    // flex: 1,
  },
});

export default CardComponent;
