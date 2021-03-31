import axios from "axios";

const KEY = "AIzaSyDcqx0_rDp-DAfff6bBPDqzafIp8wFUEbk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
