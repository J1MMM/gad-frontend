import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  APPROVAL_TABLE_COLUMN,
  DATA_GRID_STYLE,
  FARMERS_TABLE_COLUMN,
} from "../../utils/constant";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import { Box, Button, Stack } from "@mui/material";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";
import useData from "../../hooks/useData";
import InfoModal from "../Approval/InfoModal";
import axios from "../../api/axios";
import { useQueryClient } from "react-query";

const FarmersArchived = () => {
  const { farmersArchivedData, farmersArchivedDataLoading } = useData();
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const queryClient = useQueryClient();

  const handleInfoClick = (row) => {
    setSelectedRow(row);
    setInfoOpen(true);
  };

  const handleRestore = async () => {
    try {
      const response = await axios.post("/farmers/restore", {
        id: selectedRow.id,
      });

      setInfoOpen(false);
      await queryClient.invalidateQueries("farmersArchivedData");
      await queryClient.invalidateQueries("farmersData");
    } catch (error) {
      console.log(error);
    }
  };

  const ActionButtonColumn = {
    field: "actions",
    headerName: "Actions",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    renderCell: (params) => (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100%"
        gap={1}
      >
        <Button
          variant="contained"
          color="info"
          size="small"
          onClick={() => handleInfoClick(params.row)}
        >
          Info
        </Button>
      </Stack>
    ),
  };
  return (
    <>
      <DataGrid
        loading={farmersArchivedDataLoading}
        rows={farmersArchivedData}
        columns={[...APPROVAL_TABLE_COLUMN, ActionButtonColumn]}
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
        sx={DATA_GRID_STYLE}
        disableColumnResize
        slots={{
          toolbar: () => (
            <TableToolbar
              titleText="Archived Farmers"
              subText="View records of archived farmers."
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

      <InfoModal
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        row={selectedRow}
        actionButton={
          <Button size="small" variant="contained" onClick={handleRestore}>
            restore
          </Button>
        }
      />
    </>
  );
};

export default FarmersArchived;
