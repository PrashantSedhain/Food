import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  data: {},
  headers: {
    Authorization:
      "Bearer Yn5TvWPJ-5eqN_bAxWC_e3qXEBJiOx-Ynl5DN3ZGS6BPMOtGTlOnYyerXjK1V582W2CHLjOWZkSrCk7yEFve0jD6a2jFPxN-DMCYjC0FdLsPf0XiSXZv09itcDkXYHYx",
  },
});
