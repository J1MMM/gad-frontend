import { CircularProgress, Paper, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import React from "react";

function RecordsOverviewChart({ analytics }) {
  if (!analytics?.recordsOverview || !analytics?.recordsOverviewLabel) {
    return (
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          padding: 2,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 330,
        }}
      >
        <CircularProgress />
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        borderRadius: 3,
        padding: 2,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Records Overview
      </Typography>

      <BarChart
        height={250}
        // viewBox={{
        //   y: -30,
        // }}
        xAxis={[
          {
            scaleType: "band",
            data: analytics?.recordsOverviewLabel || [
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
          analytics?.recordsOverview || [
            {
              color: "#2E96FF",
              data: [4, 3, 5, 4, 3, 5, 1],
              label: "Students",
            },
            {
              color: "#B800D8",
              data: [1, 6, 3, 5, 8, 10, 3],
              label: "Employees",
            },
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
    </Paper>
  );
}

export default RecordsOverviewChart;
