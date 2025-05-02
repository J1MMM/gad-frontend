import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";

function Card({ item, index }) {
  return (
    <Paper
      sx={{
        borderRadius: 2,
        boxSizing: "border-box",
        p: 2,
        bgcolor: index == 0 ? "primary.main" : "#FFF",
        position: "relative",
      }}
      elevation={3}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        boxSizing={"border-box"}
      >
        <Typography color={index == 0 ? "#FFF" : "#808080"} fontWeight="500">
          {item?.title}
        </Typography>
        <Box
          bgcolor={
            index == 0 ? "rgba(255, 255, 255, 0.12)" : "rgba(102, 0, 255, 0.06)"
          }
          borderRadius={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={1.5}
          boxSizing={"border-box"}
        >
          {item.icon}
        </Box>
      </Box>

      {item?.value ? (
        <Typography
          ml={0.5}
          mb={1}
          variant="h4"
          color={index == 0 ? "#FFF" : "#000"}
        >
          {item?.value || 0}
        </Typography>
      ) : (
        <CircularProgress
          size={28}
          sx={{ mb: 2 }}
          color={index == 0 ? "info" : "primary"}
        />
      )}
      <Typography
        color={index == 0 ? "#FFF" : "grey"}
        fontSize={12}
        position={"absolute"}
        bottom={10}
        left={10}
      >
        {item?.sub}
      </Typography>
    </Paper>
  );
}

export default Card;
