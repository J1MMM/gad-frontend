import { MenuRounded } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../assets/images/plsp-logo.png";
import UserAvatar from "../shared/UserAvatar";
import { HEADER_HEIGHT } from "../../utils/constant";

const headerContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: HEADER_HEIGHT,
  width: "100%",
  padding: "8px 24px",
  boxSizing: "border-box",
  borderRadius: 0,
  bgcolor: "primary.main",
};

export const Header = (props) => {
  return (
    <Paper sx={headerContainerStyle}>
      <Stack direction="row" alignItems="center">
        {/* <img src={logo} width={65} /> */}
        <Typography variant="h6" fontWeight={600} color="#FFF">
          Gender and Development Management System
        </Typography>
      </Stack>
    </Paper>
  );
};
