import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import {
  DATA_GRID_STYLE,
  HEADER_HEIGHT,
  RECORDS_TABLE_COLUMN,
} from "../../utils/constant";
import useData from "../../hooks/useData";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import { PageContainer } from "../../components/layout/PageContainer";

const Dashboard = () => {
  const { records } = useData();
  console.log(records);
  return <PageContainer></PageContainer>;
};

export default Dashboard;
