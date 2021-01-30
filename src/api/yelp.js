import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer oOT9T1KMtXvVkFF45uEbZZO44Lfhak78f5etjjJAIddAhb5VNItRyRWznQeHaSmOqj_Wu6pxnzFtADCakSqCACx98AJl620wq3Tmb5LnYG9FdKduZHkAERYHYx",
    // "Content-Type": "application/json",
  },
});
