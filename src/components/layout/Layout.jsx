import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { Grid2, Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { Header } from "./Header";
import useData from "../../hooks/useData";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Layout = () => {
  const {
    records,
    employees,
    setAnalyticsCards,
    setPwdAnalytics,
    setAnalytics,
    setResidencyAnalytics,
  } = useData();

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const [
          cardsDataRes,
          pwdAnalyticsRes,
          residencyAnalyticsRes,
          analyticsRes,
        ] = await Promise.all([
          axiosPrivate("/analytics/cards", { signal: controller.signal }),
          axiosPrivate("/analytics/pwd", { signal: controller.signal }),
          axiosPrivate("/analytics/residency", { signal: controller.signal }),
          axiosPrivate("/analytics", { signal: controller.signal }),
        ]);

        setAnalytics(analyticsRes.data);
        setAnalyticsCards(cardsDataRes.data);
        setPwdAnalytics(pwdAnalyticsRes.data);
        setResidencyAnalytics(residencyAnalyticsRes.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [records, employees]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        bgcolor: "#e7e7e7",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box display="flex" height="100%">
        <SideBar />
        <Box width="calc(100% - 200px)" p={2} boxSizing="border-box">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
