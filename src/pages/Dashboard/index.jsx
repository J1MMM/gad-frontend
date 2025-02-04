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
import {
  Female,
  Male,
  Storage,
  StorageRounded,
  Transgender,
} from "@mui/icons-material";

const Dashboard = () => {
  const { records } = useData();
  console.log(records);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        height: "calc(100vh - 135px)",
        flexDirection: "column",
      }}
    >
      <Box
        width={"100%"}
        height={"30%"}
        display={"grid"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap={2}
      >
        <Paper
          sx={{
            borderRadius: 3,
            boxSizing: "border-box",
            p: 2,
            bgcolor: "primary.main",
            position: "relative",
          }}
          elevation={3}
        >
          <StorageRounded sx={{ color: "#FFF", fontSize: 48 }} />

          <Typography fontSize={32} color="#FFF">
            3,459
          </Typography>
          <Typography
            color="#FFF"
            variant="body2"
            position={"absolute"}
            bottom={15}
          >
            Total Number of Records
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: 3,
            boxSizing: "border-box",
            p: 2,
            position: "relative",
          }}
          elevation={3}
        >
          <Male sx={{ fontSize: 48 }} color="primary" />

          <Typography fontSize={32}>3,459</Typography>
          <Typography variant="body2" position={"absolute"} bottom={15}>
            Total Number of Male
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: 3,
            boxSizing: "border-box",
            p: 2,
            position: "relative",
          }}
          elevation={3}
        >
          <Female sx={{ fontSize: 48 }} color="primary" />

          <Typography fontSize={32}>3,459</Typography>
          <Typography variant="body2" position={"absolute"} bottom={15}>
            Total Number of Female
          </Typography>
        </Paper>{" "}
        <Paper
          sx={{
            borderRadius: 3,
            boxSizing: "border-box",
            p: 2,
            position: "relative",
          }}
          elevation={3}
        >
          <Transgender sx={{ fontSize: 48 }} color="primary" />

          <Typography fontSize={32}>3,459</Typography>
          <Typography variant="body2" position={"absolute"} bottom={15}>
            Total Number of other gender
          </Typography>
        </Paper>
      </Box>
      <Box width={"100%"} height={"100%"} display={"flex"} gap={2}>
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            width: "50%",
            height: "100%",
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
              height={500}
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                },
              ]}
              series={[
                { data: [4, 3, 5, 4, 3, 5, 1], label: "Records" },
                { data: [1, 6, 3, 5, 8, 10, 3], label: "Archived" },
              ]}
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
          width="50%"
          height="100%"
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
                height={400}
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: 1,
                        label: "SPC Resident",
                        color: "#075FC8",
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
    </Box>
  );
};

export default Dashboard;
