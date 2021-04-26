import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const CardComponent = (props) => {
  const [isActive, setIsActive] = useState(false);
  let Image_Http_URL = {
    uri: props.imageURL,
  };

  const handleToggle = () => {
    //Adding and removing from favorites logic goes here once the user schema is defined
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity
      onPress={props.navigate}
      style={props.viewAll ? styles.cardStyle2 : styles.cardStyle}
      activeOpacity={1}
    >
      <Image
        style={props.viewAll ? styles.imageStyle2 : styles.imageStyle}
        source={Image_Http_URL}
      ></Image>
      <View>
        <Text style={{ fontWeight: "bold", marginTop: 5, color: "#f4511e" }}>
          Fri, Jul 23, 2021 - 12:59 pm
        </Text>
        <Text style={{ fontWeight: "bold", marginTop: 3, color: "black" }}>
          {props.title}
        </Text>
        <Text style={{ fontWeight: "bold", marginTop: 3, color: "#878787" }}>
          Gongabu, Kathmandu
        </Text>
      </View>

      <FontAwesome
        onPress={handleToggle}
        style={isActive ? styles.favClickedStyle : styles.favIconStyle}
        name={isActive ? "heart" : "heart-o"}
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
  cardStyle2: {
    margin: 10,
    width: 300,
    height: 230,
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
  imageStyle2: {
    height: 120,
    width: 300,
  },
  favIconStyle: {
    position: "absolute",
    margin: 10,
    color: "white",
  },

  favClickedStyle: {
    position: "absolute",
    margin: 7,
    color: "#f4511e",
  },
});

export default CardComponent;
