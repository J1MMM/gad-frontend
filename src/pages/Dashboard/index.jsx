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

const Dashboard = () => {
  const { records } = useData();
  console.log(records);
  return (
    <Box height="100%">
      <DataGrid
        loading={false}
        rows={records}
        columns={RECORDS_TABLE_COLUMN}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
              page: 0,
            },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        disableRowSelectionOnClick
        sx={{
          ...DATA_GRID_STYLE,
        }}
        disableColumnResize
        slots={{
          toolbar: () => (
            <TableToolbar
              titleText="Placeholder"
              subText={"shprt description herre"}
              actionBtn={
                <>
                  <TableFilterBtn />
                  <TableQuickFilter />
                </>
              }
            />
          ),
        }}
      />
    </Box>
  );
};

export default Dashboard;
