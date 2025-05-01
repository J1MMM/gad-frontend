import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import React from "react";

function PWDRecordsChart({ analytics }) {
  if (!analytics?.pwdChartData) {
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
        Persons with Disabilities
      </Typography>

      <Box display="flex" justifyContent="space-between">
        <Box component="ul" sx={{ width: "50%" }}>
          {[
            { label: "Total Records", value: analytics?.pwdTotal || 0 },
            {
              label: "Male",
              value: `${analytics?.pwdTotalMalePercent || 0}%`,
            },
            {
              label: "Female",
              value: `${analytics?.pwdTotalFemalePercent || 0}%`,
            },
            {
              label: "Other Genders",
              value: `${analytics?.pwdOtherGenderPercent || 0}%`,
            },
          ].map((item, index) => (
            <li key={index}>
              <Typography fontWeight={600} mt={2}>
                {`${item.label} (${item.value})`}
              </Typography>
            </li>
          ))}
        </Box>

        <PieChart
          height={250}
          series={[
            {
              data: analytics?.pwdChartData || [
                { id: 0, value: 50, label: "Male", color: "#02A3FE" },
                { id: 1, value: 35, label: "Female", color: "#EC49A6" },
                { id: 2, value: 15, label: "Others", color: "#FED808" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 20, additionalRadius: -30, color: "gray" },
              innerRadius: 50,
              cornerRadius: 5,
              startAngle: -180,
              endAngle: 360,
              paddingAngle: 3,
              valueFormatter: (params) =>
                `${params.value} ${
                  params.value > 1 ? "Individuals" : "Individual"
                }`,
            },
          ]}
          slotProps={{
            legend: {
              direction: "column",
              position: { vertical: "top", horizontal: "right" },
            },
          }}
        />
      </Box>
    </Paper>
  );
}

export default PWDRecordsChart;
