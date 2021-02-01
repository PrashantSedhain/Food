import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TitleComponent from "../components/TitleComponent";
import CardComponent from "../components/CardComponent";
import { withNavigation } from "react-navigation";

const ResultsList = ({ results, title, navigation }) => {
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
                navigation.navigate("DetailScreen", {
                  id: item.id,
                });
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

  imageStyle: {
    height: 120,
    width: 200,
    // flex: 1,
    borderRadius: 5,
  },
});

export default withNavigation(ResultsList);
