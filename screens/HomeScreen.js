import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../src/hooks/useResults";
import ResultsList from "../components/ResultsList";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$ || "$$" or '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}
      >
        <Text>{errorMessage}</Text>

        <View style={styles.border}></View>

        <ResultsList
          navigation={navigation}
          title="Recently Viewed"
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          navigation={navigation}
          title="Popular Events"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          navigation={navigation}
          title="Happening Nearby"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
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
    borderColor: "#dedbd9",
  },

  scrollViewStyle: {
    marginHorizontal: 8,
  },
});

export default HomeScreen;
