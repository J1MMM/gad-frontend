import dayjs from "dayjs";
import axios from "./axios";

export const fetchRecords = async () => {
  try {
    const response = await axios.get("/records");
    return response.data || [];
  } catch (error) {
    console.log(error);
  }
};
