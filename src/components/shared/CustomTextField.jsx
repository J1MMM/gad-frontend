import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function CustomTextField({
  label,
  name,
  value,
  onChange,
  width,
  type,
  readOnly,
  required,
}) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={1}
      flexWrap={"wrap"}
      // border={"1px solid"}
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
        required={required ?? true}
        slotProps={{ input: { readOnly: readOnly } }}
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
