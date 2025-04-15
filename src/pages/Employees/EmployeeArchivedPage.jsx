import { Box, Button, Collapse, Icon, IconButton } from "@mui/material";
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
import { ContainerModal } from "../../components/shared/ContainerModal";
import AddRecordModal from "./AddRecordModal";
import axios from "../../api/axios";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";
import { useQueryClient } from "react-query";
import SnackBar from "../../components/shared/SnackBar";
import {
  Add,
  Delete,
  Edit,
  FilterList,
  Restore,
  RestoreFromTrash,
  RestorePage,
} from "@mui/icons-material";
import FilterModal from "./FilterModal";
import EditRecordModal from "./EditRecordModal";

const initialFormData = {
  fname: "",
  mname: "",
  lname: "",
  email: "",
  address: "",
  program: "",
  yearLevel: "",
  section: "",
  gender: "",
  otherGender: "",
  governmentBenificiaries: "",
  comorbidity: "",
  PWD: "",
  socioEconomicStatus: "",
  spcResident: "",
};

const EmployeeArchivedPage = () => {
  const { archivedRecords } = useData();
  const [formData, setFormData] = useState(initialFormData);
  const [selectedRow, setSelectedRow] = useState(initialFormData);
  const [formDisable, setFormDisable] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");
  const queryClient = useQueryClient();

  const [confirmationModel, setConfirmationModel] = useState({
    open: false,
    title: "",
    content: "",
    onsubmit: () => {},
  });

  const handleAddRecordSubmit = async () => {
    setFormDisable(true);
    try {
      const response = await axios.post("/records", formData);
      await queryClient.invalidateQueries("records");
      setAddModalOpen(false);
      setAlertSeverity("success");
      setAlertMsg("A new record has been added successfully.");
      setFormData(initialFormData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setAlertMsg("An error occurred while adding the data.");
      setAlertSeverity("error");
    }

    setFormDisable(false);
    setConfirmationModel((prev) => ({ ...prev, open: false }));
    setAlertOpen(true);
  };

  const handleEditRecordSubmit = async () => {
    setFormDisable(true);
    try {
      const response = await axios.patch("/records", selectedRow);
      await queryClient.invalidateQueries("records");
      setEditModalOpen(false);
      setAlertSeverity("success");
      setAlertMsg("Updated successfully.");
      setSelectedRow(initialFormData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setAlertMsg("An error occurred while adding the data.");
      setAlertSeverity("error");
    }

    setFormDisable(false);
    setConfirmationModel((prev) => ({ ...prev, open: false }));
    setAlertOpen(true);
  };

  const deleteRecord = async (id) => {
    setFormDisable(true);
    try {
      const response = await axios.delete(`/records/${id}`);
      console.log(response.data);

      await queryClient.invalidateQueries("archivedRecords");
      setAlertSeverity("success");
      setAlertMsg("Record deleted successfully.");
      setConfirmationModel((prev) => ({ ...prev, open: false }));
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setAlertMsg("An error occurred while deleting the record.");
      setAlertSeverity("error");
    }

    setAlertOpen(true);
    setFormDisable(false);
  };

  const restoreRecord = async (id) => {
    setFormDisable(true);
    try {
      const response = await axios.put(`/records/${id}`);
      console.log(response.data);

      await queryClient.invalidateQueries("archivedRecords");
      await queryClient.invalidateQueries("records");
      setAlertSeverity("success");
      setAlertMsg("Record restored successfully.");
      setConfirmationModel((prev) => ({ ...prev, open: false }));
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setAlertMsg("An error occurred while restoring the record.");
      setAlertSeverity("error");
    }

    setAlertOpen(true);
    setFormDisable(false);
  };

  return (
    <>
      {/* <Collapse in={true}>
        <Box bgcolor={"primary.main"} width={"100%"} p={3}></Box>
      </Collapse> */}
      <DataGrid
        loading={false}
        rows={archivedRecords}
        // checkboxSelection
        columns={[
          ...RECORDS_TABLE_COLUMN,
          {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            editable: false,
            headerClassName: "data-grid-header",
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (
              <Box>
                <IconButton
                  color="primary"
                  onClick={() =>
                    setConfirmationModel((prev) => ({
                      ...prev,
                      open: true,
                      title: "Confirm restore",
                      content: "Are you sure you want to restore this record?",
                      onsubmit: () => restoreRecord(params.id),
                    }))
                  }
                >
                  <Restore />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() =>
                    setConfirmationModel((prev) => ({
                      ...prev,
                      open: true,
                      title: "Confirm delete",
                      content: "Are you sure you want to delete this record?",
                      onsubmit: () => deleteRecord(params.id),
                    }))
                  }
                >
                  <Delete>delete</Delete>
                </IconButton>
              </Box>
            ),
          },
        ]}
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
          height: "calc(100vh - 200px)",
        }}
        disableColumnResize
        slots={{
          toolbar: () => (
            <TableToolbar
              titleText="List of Archived Records"
              subText={"Overview of all archived records"}
              actionBtn={
                <>
                  {/* <TableFilterBtn /> */}
                  <TableQuickFilter />
                </>
              }
            />
          ),
        }}
      />

      <AddRecordModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={(e) => {
          e.preventDefault();
          setConfirmationModel((prev) => ({
            ...prev,
            open: true,
            title: "Confirm adding record",
            content: "Are you sure you want to add this record?",
            onsubmit: handleAddRecordSubmit,
          }));
        }}
      />

      <EditRecordModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        handleSubmit={(e) => {
          e.preventDefault();
          setConfirmationModel((prev) => ({
            ...prev,
            open: true,
            title: "Confirm updating record",
            content: "Are you sure you want to update this record?",
            onsubmit: handleEditRecordSubmit,
          }));
        }}
      />

      <ConfirmationDialog
        open={confirmationModel?.open}
        onClose={() =>
          setConfirmationModel((prev) => ({ ...prev, open: false }))
        }
        title={confirmationModel?.title}
        content={confirmationModel?.content}
        disabled={formDisable}
        confirm={confirmationModel?.onsubmit}
      />

      <SnackBar
        open={alertOpen}
        onClose={setAlertOpen}
        msg={alertMsg}
        severity={alertSeverity}
      />
    </>
  );
};

export default EmployeeArchivedPage;
