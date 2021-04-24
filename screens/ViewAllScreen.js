import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CardComponent from "../components/CardComponent";

import yelp from "../src/api/yelp";

const ViewAllScreen = (props) => {
  const [result, setResult] = useState(null);
  const id = props.route.params.id;

  let counter = 0;

  const asignKey = () => {
    counter = counter + 1;
    return counter;
  };

  const getDetails = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  if (!result) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return (
              <View>
                <CardComponent
                  imageURL={item}
                  title={item.name}
                  key={item.id}
                  viewAll={true}
                  // navigate={() => {
                  //   navigation.navigate("DetailScreen", {
                  //     id: item.id,
                  //   });
                  // }}
                />
                <View style={styles.border}></View>
              </View>
            );
          }}
        ></FlatList>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    alignSelf: "center",
  },
  imageStyle: {
    height: 120,
    width: 200,
    // flex: 1,
    borderRadius: 5,
    alignSelf: "center",
    margin: 8,
  },
  border: {
    borderWidth: 0.8,
    borderColor: "#dedbd9",
    marginBottom: 5,
  },
});

export default ViewAllScreen;
