import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TitleComponent from "../components/TitleComponent";
import CardComponent from "../components/CardComponent";

const ResultsList = ({ results, navigation, title }) => {
  const data = results;
  return (
    <View>
      <TitleComponent title={title} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {data.map((item) => {
          return (
            <CardComponent
              imageURL={item.image_url}
              title={item.name}
              key={item.id}
              navigate={() => {
                console.log("Pressed");
                navigation.navigate("DetailScreen");
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    // borderWidth: 1,
    flexDirection: "row",
  },
});

export default ResultsList;
