import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const CardComponent = (props) => {
  const [iconClass, setIconClass] = useState({
    class: styles.favIconStyle,
    name: "heart-o",
  });
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

      <FontAwesome
        onPress={() => {
          setIconClass({ class: styles.favClickedStyle, name: "heart" });
        }}
        style={iconClass.class}
        name={iconClass.name}
        size={35}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    width: 300,
    height: 200,
    borderColor: "black",
    backgroundColor: "#F2F2F2",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "gray",
    elevation: 3,
    zIndex: 1,
    borderRadius: 10,
  },

  imageStyle: {
    height: 120,
    width: 300,
  },

  favIconStyle: {
    position: "absolute",
    margin: 7,
    color: "white",
  },

  favClickedStyle: {
    position: "absolute",
    margin: 7,
    color: "#f4511e",
  },
});

export default CardComponent;
