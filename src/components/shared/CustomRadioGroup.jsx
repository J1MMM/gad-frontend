import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function CustomRadioGroup({
  label,
  name,
  options,
  onChange,
  otherTextField,
  otherTextFieldValue,
  value,
}) {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      alignItems={"flex-start"}
      gap={1}
      // border={"1px solid"}
    >
      <Typography
        variant="body2"
        fontWeight="bold"
        noWrap
        sx={{ flexShrink: 0, whiteSpace: "nowrap", mt: 1.5 }} // prevents wrapping
      >
        {label}
      </Typography>
      <RadioGroup row name={name} onChange={onChange} value={value}>
        {options?.map((option, index) => {
          return (
            <Box display="flex" alignItems="center" key={index}>
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
              {option === "Other" && (
                <TextField
                  required
                  variant="standard"
                  name={otherTextField}
                  value={otherTextFieldValue}
                  onChange={onChange}
                  sx={{
                    display: value == "Other" ? "initial" : "none",
                  }}
                />
              )}
            </Box>
          );
        })}
      </RadioGroup>
    </Box>
  );
}

export default CustomRadioGroup;
