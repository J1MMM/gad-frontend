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
      sub: "The complete number of records stored in the system",
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
      title: "Total Other Gender",
      sub: "Total number of other gender records",
      value: analytics?.totalOtherGender || 0,
      icon: <Transgender sx={{ color: "primary.main", fontSize: 20 }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gap: 2,
        height: "calc(100vh - 135px)",
        gridTemplateColumns: "auto auto",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={"1fr 1fr"}
        gridTemplateRows={"1fr 1fr"}
        gap={2}
      >
        {cardData?.map((item, index) => (
          <Paper
            key={index}
            sx={{
              borderRadius: 2,
              boxSizing: "border-box",
              p: 2,
              bgcolor: index == 0 ? "primary.main" : "#FFF",
              position: "relative",
            }}
            elevation={3}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                color={index == 0 ? "#FFF" : "#808080"}
                fontWeight="500"
                fontFamily={"Poppins"}
              >
                {item?.title}
              </Typography>
              <Box
                bgcolor={
                  index == 0
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(102, 0, 255, 0.06)"
                }
                borderRadius={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={1.5}
                boxSizing={"border-box"}
              >
                {" "}
                {item.icon}
              </Box>
            </Box>

            <Typography
              ml={0.5}
              variant="h4"
              color={index == 0 ? "#FFF" : "#000"}
            >
              {item?.value || 0}
            </Typography>
            <Typography
              color={index == 0 ? "#FFF" : "grey"}
              position={"absolute"}
              bottom={15}
              fontFamily={"Poppins"}
              fontSize={12}
            >
              {item?.sub}
            </Typography>
          </Paper>
        ))}
      </Box>
      <Paper sx={{ borderRadius: 3 }}></Paper>
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          borderRadius: 3,
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Records Overview
        </Typography>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <BarChart
            height={350}
            xAxis={[
              {
                scaleType: "band",
                data: analytics?.labels || [
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                ],
              },
            ]}
            series={
              analytics?.data || [
                { data: [4, 3, 5, 4, 3, 5, 1], label: "Records" },
                { data: [1, 6, 3, 5, 8, 10, 3], label: "Archived" },
              ]
            }
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "bottom", horizontal: "middle" },
                padding: -5,
                itemMarkHeight: 15,
                itemMarkWidth: 15,
                labelStyle: {
                  fontSize: 12,
                },
              },
            }}
          />
        </Box>
      </Paper>

      <Box
        // border="1px solid"
        borderRadius={3}
        display="grid"
        gap={2}
      >
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            height: "100%",
            borderRadius: 3,
            padding: 2,
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Residency Overview
          </Typography>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <PieChart
              height={350}
              series={[
                {
                  data: analytics?.residencyData || [
                    {
                      id: 0,
                      value: 1,
                      label: "SPC Resident",
                      color: "#6200E8",
                    },
                    {
                      id: 1,
                      value: 2,
                      label: "Outside SPC",
                      color: "#ECEDFC",
                    },
                  ],
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 20,
                    additionalRadius: -30,
                    color: "gray",
                  },
                  innerRadius: 30,
                  cornerRadius: 5,
                  startAngle: -180,
                  endAngle: 360,
                  paddingAngle: 3,
                  valueFormatter: (params) =>
                    `${params.value} ${
                      params.value > 1 ? "students" : "student"
                    }`,
                },
              ]}
              slotProps={{
                legend: {
                  direction: "column",
                  position: { vertical: "top", horizontal: "left" },
                },
              }}
            ></PieChart>
          </Box>
        </Paper>
      </Box>

      {/* <Paper elevation={3} sx={{ width: "50%", borderRadius: 3 }}>
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          width={"100%"}
          height={300}
        />
      </Paper> */}
    </Box>
  );
};

export default Dashboard;
