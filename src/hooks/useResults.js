import { useEffect, useState } from "react";
import eventApi from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await eventApi.get("/event");
      setResults(response.data.data);
    } catch (err) {
      setErrorMessage("Something went terribly wrong");
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};
