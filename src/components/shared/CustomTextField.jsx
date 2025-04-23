import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function CustomTextField({ label, name, value, onChange, width, type }) {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      alignItems={"center"}
      gap={1}
      //   border={"1px solid"}
    >
      <Typography
        variant="body2"
        fontWeight="bold"
        noWrap
        sx={{ flexShrink: 0, whiteSpace: "nowrap" }} // prevents wrapping
      >
        {label}
      </Typography>
      <TextField
        required
        variant="standard"
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        // fullWidth
        sx={{ width: width }}
      />
    </Box>
  );
}

export default CustomTextField;
