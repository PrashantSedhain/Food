import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TitleComponent from "../components/TitleComponent";
import CardComponent from "../components/CardComponent";

const ResultsList = (props) => {
  const data = props.results;
  return (
    <View>
      <TitleComponent title={props.title} />
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
