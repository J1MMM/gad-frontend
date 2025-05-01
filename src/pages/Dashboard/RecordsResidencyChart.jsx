import { CircularProgress, Paper, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import React from "react";

function RecordsResidencyChart({ analytics }) {
  if (!analytics?.residencyChartData) {
    return (
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          borderRadius: 3,
          padding: 2,
          boxSizing: "border-box",
          justifyContent: "center",
          alignItems: "center",
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
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Residency Overview
      </Typography>

      <PieChart
        height={250}
        series={[
          {
            data: analytics?.residencyChartData || [
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
              `${params.value} ${params.value > 1 ? "records" : "record"}`,
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "top", horizontal: "right" },
          },
        }}
      />
    </Paper>
  );
}

export default RecordsResidencyChart;
