import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

export const PageContainer = ({
  titleText,
  subText,
  actionButtons,
  children,
}) => {
  return (
    <Paper
      sx={{ p: 2, boxSizing: "border-box", width: "100%", borderRadius: 2 }}
    >
      <Stack
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Stack>
          <Typography variant="h6" fontWeight={600}>
            {titleText}
          </Typography>
          <Typography variant="body2" mt={-0.5}>
            {subText}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
          {actionButtons}
        </Stack>
      </Stack>
      <Box height="calc(100% - 70px)"> {children}</Box>
    </Paper>
  );
};
