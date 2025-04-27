import dayjs from "dayjs";
import axios from "./axios";

export const fetchEmployees = async () => {
  try {
    const response = await axios.get("/employees");
    return response.data || [];
  } catch (error) {
    console.log(error);
  }
};

export const fetchArhivedEmployees = async () => {
  try {
    const response = await axios.get("/employees/archived");
    return response.data || [];
  } catch (error) {
    console.log(error);
  }
};
