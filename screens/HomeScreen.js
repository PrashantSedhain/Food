import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../src/hooks/useResults";
import ResultsList from "../components/ResultsList";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByCategory = (category) => {
    return results.filter((res) => {
      return res.category == category;
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
          title="Popular Events"
          results={results}
        />

        <ResultsList
          navigation={navigation}
          title="Sports"
          results={filterResultsByCategory("Sports")}
        />

        <ResultsList
          navigation={navigation}
          title="Concerts"
          results={filterResultsByCategory("Concert")}
        />

        <ResultsList
          navigation={navigation}
          title="Theaters"
          results={filterResultsByCategory("Theater")}
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
