import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const AboutComponent = (props) => {
  const [lineLimit, setLineLimit] = useState(7);
  const [isReadMoreClicked, setReadMoreClicked] = useState(false);
  const handleClick = () => {
    setReadMoreClicked(!isReadMoreClicked);
    setLineLimit(15);
  };
  return (
    <View style={styles.viewStyle}>
      <View style={{ marginLeft: 3, marginRight: 3 }}>
        <Text style={styles.headerStyle}>About</Text>
        <Text style={styles.bodyStyle} numberOfLines={lineLimit}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        {!isReadMoreClicked ? (
          <Button onPress={handleClick} title="Read More" />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  bodyStyle: {
    textAlign: "justify",
    fontSize: 16,
  },
  viewStyle: {
    marginLeft: 5,
    marginRight: 5,
  },
});

export default AboutComponent;
