import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CardComponent from "../components/CardComponent";
import SearchBar from "../components/SearchBar";
import yelp from "../src/api/yelp";
import TitleComponent from "../components/TitleComponent";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const data = [1, 2, 3, 4, 5, 6];

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <ScrollView>
      <SearchBar
        onTermSubmit={() => searchApi()}
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />
      <Text>We found {results.length} restaurants.</Text>
      <Text>{errorMessage}</Text>
      <TitleComponent title="Cheap Restaurants" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {data.map((item) => {
          return (
            <CardComponent
              key={item}
              navigate={() => {
                navigation.navigate("DetailScreen");
              }}
            />
          );
        })}
      </ScrollView>

      <View style={styles.border}></View>

      <TitleComponent title="Expensive Restaurants" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {data.map((item) => {
          return (
            <CardComponent
              navigate={() => {
                navigation.navigate("DetailScreen");
              }}
              key={item}
            />
          );
        })}
      </ScrollView>
      <View style={styles.border}></View>

      <TitleComponent title="Luxury Restaurants" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {data.map((item) => {
          return (
            <CardComponent
              key={item}
              navigate={() => {
                navigation.navigate("DetailScreen");
              }}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    // borderWidth: 1,
    flexDirection: "row",
  },

  border: {
    borderWidth: 0.8,
    borderColor: "gray",
  },
});

export default HomeScreen;
