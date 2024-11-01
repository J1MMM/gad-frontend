import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Margin } from "@mui/icons-material";
import { Paper, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const style = {
  Margin: 0,
  p: "15px",
  width: "9vw",
};

const Tab = (props) => {
  return (
    <Paper
      component={Stack}
      direction={"row"}
      elevation={0}
      pl={3}
      sx={{ borderRadius: 0, borderBottom: "1px solid #e2e2e2" }}
    >
      {props?.links.map((obj, index) => {
        return (
          <NavLink key={index} to={obj.to} className="tab-link" end>
            <Typography> {obj.label}</Typography>
          </NavLink>
        );
      })}
    </Paper>
  );
};

export default Tab;
