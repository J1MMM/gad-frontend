import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";

const styleLayout = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  boxSizing: "border-box",
  overflow: "hidden",
  transitionDuration: "500ms",
  bgcolor: "#D6D7DB",
  padding: 1,
  gap: 1,
};

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
    <Box sx={styleLayout}>
      <Stack
        direction="row"
        width="100%"
        height={"100vh"}
        gap={1}
        boxSizing={"border-box"}
      >
        <SideBar />
        <Outlet />
      </Stack>
    </Box>
  );
};

export default Layout;
