import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CardComponent from "../components/CardComponent";
import SearchBar from "../components/SearchBar";
import yelp from "../src/api/yelp";
import TitleComponent from "../components/TitleComponent";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const data = [1, 2, 3, 4, 5, 6];

  //   const searchApi = () => {
  //     yelp
  //       .get("/search", {
  //         params: {
  //           term: term,
  //           limit: 50,
  //           location: "san jose",
  //         },
  //       })
  //       .then((response) => {
  //           console.log(response)
  //         setResults(response.data.businesses);
  //       });
  //   };

  const searchApi = async () => {
    try {
      const { data } = await yelp.get("/search", {
        params: { term, limit: 50, location: "san jose" },
      });
      setResults(data.businesses);
    } catch (err) {
      console.warn(err);
      setResults([]);
    }
  };
  return (
    <ScrollView>
      <SearchBar
        // onTermSubmit={() => searchApi()}
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />

      <TitleComponent title="Cheap Restaurants" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {data.map((item) => {
          return <CardComponent key={item} />;
        })}
      </ScrollView>

      <TitleComponent title="Expensive Restaurants" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {data.map((item) => {
          return <CardComponent key={item} />;
        })}
      </ScrollView>

      <TitleComponent title="Luxury Restaurants" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.viewStyle}
      >
        {data.map((item) => {
          return <CardComponent key={item} />;
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
});

export default HomeScreen;
