import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Tab from "./Tab";

export const PageContainer = ({ children, tabs, titleText, subText }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        boxSizing: "border-box",
        position: "relative",
        width: "100%",
        height: "calc(100vh - 135px)",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      {tabs && <Tab links={tabs} />}

      <Box height="100%" boxSizing={"border-box"}>
        {titleText && (
          <Stack boxSizing="border-box" mb={1} sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600}>
              {titleText}
            </Typography>
            <Typography variant="body2" mt={-0.5}>
              {subText}
            </Typography>
          </Stack>
        )}
        {children}
      </Box>
    </Paper>
  );
};
