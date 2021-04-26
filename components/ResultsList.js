import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TitleComponent from "../components/TitleComponent";
import CardComponent from "../components/CardComponent";
import { withNavigation } from "react-navigation";

const ResultsList = ({ results, title, navigation }) => {
  const data = results;
  return (
    <View>
      <TitleComponent
        title={title}
        navigate={() => {
          navigation.navigate("ViewAllScreen", {
            id: item.id,
          });
        }}
      />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {Object.values(data).map((item) => {
          return (
            <CardComponent
              imageURL={item.coverImage}
              title={item.title}
              key={item._id}
              navigate={() => {
                navigation.navigate("ViewAllScreen", {
                  id: item._id,
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
    height: 220,
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
