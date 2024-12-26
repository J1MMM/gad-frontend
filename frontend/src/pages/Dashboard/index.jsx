import React, { useEffect, useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart, PieChart } from "@mui/x-charts";
import { TIAONG_BRGY } from "../../utils/constant";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import useData from "../../hooks/useData";
import axios from "../../api/axios";
import { useQueryClient } from "react-query";
const Dashboard = () => {
  const queryClient = useQueryClient();

  const [yearlyRecordsData, setYearlyRecordsData] = useState();
  const date = new Date();
  const yearNow = date.getFullYear();
  const [year, setYear] = useState(yearNow);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.post("/livestock/yearly-records", {
          year,
        });

        console.log("response.data");
        console.log(response.data);

        setYearlyRecordsData(response.data);
      } catch (error) {
        console.error("Error fetching yearly records:", error);
      }
    };

    fetch();
  }, [year]);

  const livestockData = [
    2400, 1398, 9800, 3908, 4800, 3800, 4300, 5400, 8398, 9800, 4908, 4800,
  ];
  const mortalityData = [
    4000, 3000, 2000, 2780, 1890, 2390, 3490, 1233, 2342, 4564, 3453, 3455,
  ];
  const xLabels = [
    `Jan ${year}`,
    `Feb ${year}`,
    `March ${year}`,
    `April ${year}`,
    `May ${year}`,
    `June ${year}`,
    `July ${year}`,
    `Aug ${year}`,
    `Sept ${year}`,
    `Oct ${year}`,
    `Nov ${year}`,
    `Dec ${year}`,
  ];
  return <></>;
};

export default Dashboard;
