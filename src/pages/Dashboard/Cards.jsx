import { Box } from "@mui/material";
import React from "react";
import Card from "./Card";

function Cards({ cardData }) {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{ md: "1fr 1fr", sm: "1fr" }}
      gap={2}
      boxSizing={"border-box"}
    >
      {cardData?.map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </Box>
  );
}

export default Cards;
