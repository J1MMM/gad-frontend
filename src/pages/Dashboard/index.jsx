import { Box, Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import {
  DATA_GRID_STYLE,
  HEADER_HEIGHT,
  RECORDS_TABLE_COLUMN,
} from "../../utils/constant";
import useData from "../../hooks/useData";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import { PageContainer } from "../../components/layout/PageContainer";
import { BarChart, PieChart } from "@mui/x-charts";
import { Female, Male, StorageRounded, Transgender } from "@mui/icons-material";
import axios from "../../api/axios";
import Cards from "./Cards";
import RecordsOverviewChart from "./RecordsOverviewChart";
import RecordsResidencyChart from "./RecordsResidencyChart";
import PWDRecordsChart from "./PWDRecordsChart";

const Dashboard = () => {
  const { records } = useData();
  const [analytics, setAnalytics] = useState({});
  console.log(records);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("/analytics");
        console.log("response.data");
        console.log(response.data);
        setAnalytics(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log("analytics");
  console.log(analytics);

  const cardData = [
    {
      title: "Total Records",
      sub: "The number of records stored in the system",
      value: analytics?.totalRecords || 0,
      icon: <StorageRounded sx={{ color: "#FFF", fontSize: 20 }} />,
    },
    {
      title: "Total Male",
      sub: "The number of records identified as male",
      value: analytics?.totalMale || 0,
      icon: <Male sx={{ color: "primary.main", fontSize: 20 }} />,
    },
    {
      title: "Total Female",
      sub: "The number of records identified as female",
      value: analytics?.totalFemale || 0,
      icon: <Female sx={{ color: "primary.main", fontSize: 20 }} />,
    },
    {
      title: "Total Other Genders",
      sub: "Total number of other gender records",
      value: analytics?.totalOtherGender || 0,
      icon: <Transgender sx={{ color: "primary.main", fontSize: 20 }} />,
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        height: "calc(100vh - 135px)",
        gridTemplateColumns: { sm: "1fr", md: "1fr", lg: "1fr 1fr" },
        overflowY: "auto",
        padding: 1,
        boxSizing: "border-box",
      }}
    >
      <Cards cardData={cardData} />
      <PWDRecordsChart analytics={analytics} />
      <RecordsOverviewChart analytics={analytics} />
      <RecordsResidencyChart analytics={analytics} />
    </Box>
  );
};

export default Dashboard;
