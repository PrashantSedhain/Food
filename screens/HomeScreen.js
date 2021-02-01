import React, { useState, useEffect } from "react";
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
    <ScrollView>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />
      <Text>{errorMessage}</Text>

      <View style={styles.border}></View>

      <ResultsList
        title="Cheap Restaurants"
        results={filterResultsByPrice("$")}
      />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
      <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} />
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
