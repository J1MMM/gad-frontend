import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { Grid2, Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { Header } from "./Header";

const Layout = () => {
  const [open, setOpen] = useState(true);
  const auth = useAuth();

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        bgcolor: "#e7e7e7",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box display="flex" height="100%">
        <SideBar />
        <Box width="calc(100% - 200px)" p={1} boxSizing="border-box">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
