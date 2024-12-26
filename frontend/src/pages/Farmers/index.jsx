import React, { useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { DATA_GRID_STYLE, FARMERS_TABLE_COLUMN } from "../../utils/constant";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import { Box, Button, Stack } from "@mui/material";
import logo from "../../assets/images/logo.jpg";
import Tab from "../../components/layout/Tab";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";
import useData from "../../hooks/useData";
import InfoModal from "../Approval/InfoModal";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";
import axios from "../../api/axios";
import { useQueryClient } from "react-query";
import SnackBar from "../../components/shared/SnackBar";

const Farmers = () => {
  const queryClient = useQueryClient();
  const { farmersData, farmersDataLoading } = useData();
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [achiveConfirmationOpen, setAchiveConfirmationOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [formMsg, setFormMsg] = useState("");
  const [severity, setSeverity] = useState("");

  const handleInfoClick = (row) => {
    setSelectedRow(row);
    setInfoOpen(true);
  };

  const handleArchiveSubmit = async () => {
    setDisabled(true);

    try {
      const response = await axios.post("/farmers/archive", {
        id: selectedRow.id,
      });
      console.log(response.data);

      await queryClient.setQueryData("farmersData", (oldData) =>
        oldData.filter((item) => item.id != selectedRow?.id)
      );
      await queryClient.invalidateQueries("farmersArchivedData");
      setSeverity("success");
      setFormMsg("Farmer's data archived successfully.");
      setAchiveConfirmationOpen(false);
    } catch (error) {
      setSeverity("error");
      setFormMsg("Failed to archive farmer's data. Please try again.");
      console.log(error);
    }
    setSnackOpen(true);
    setDisabled(false);
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
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => {
            setSelectedRow(params.row);
            setAchiveConfirmationOpen(true);
          }}
        >
          Archive
        </Button>
      </Stack>
    ),
  };
  return <></>;
};

export default Farmers;
