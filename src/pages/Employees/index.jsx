import { Box, Button, Collapse, Icon, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import {
  DATA_GRID_STYLE,
  EMPLOYEES_TABLE_COLUMN,
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
import { Add, Archive, Delete, Edit, FilterList } from "@mui/icons-material";
import FilterModal from "./FilterModal";
import EditRecordModal from "./EditRecordModal";

const initialFormData = {
  employeeIdNo: "",
  fullname: "",
  email: "",
  brgy: "",
  city: "",
  province: "",
  department: "",
  position: "",
  birthDate: "",
  age: "",
  civilStatus: "",
  sex: "",
  gender: "",
  otherGender: "",
  sexualOrientation: "",
  otherSexualOrientation: "",
  disabilityStatus: "",
  disabilitySpecify: "",
  ethnicGroup: "",
  spcResident: "",

  noOfDependents: "",
  soloParent: "",
  caregivingResponsibilities: "",
  caregivingResponsibilitiesSpecify: "",

  educationalAttainment: "",
  otherEducationalAttainment: "",

  employmentStatus: "",
  otherEmploymentStatus: "",
  lengthOfService: "",
  attendGenderSensitivityTraining: "",
  yearAndTitleOfTraining: "",
  remarks: "",

  archived: false,
};

const filterInitialValues = {
  employeeIdNo: "",
  fullname: "",
  department: "",
  position: "",
  sex: "",
  gender: "",
  sexualOrientation: "",
  soloParent: "",
  disabilityStatus: "",
  spcResident: "",
  educationalAttainment: "",
  employmentStatus: "",
};
const Records = () => {
  const { employees } = useData();
  console.log(employees);

  const [filteredRecords, setFilteredRecords] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [selectedRow, setSelectedRow] = useState(initialFormData);
  const [filters, setFilters] = useState(filterInitialValues);
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

  useEffect(() => {
    setFilteredRecords(employees);
  }, [employees]);

  const handleAddRecordSubmit = async () => {
    setFormDisable(true);
    try {
      const response = await axios.post("/employees", formData);
      await queryClient.invalidateQueries("employees");
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
      const response = await axios.patch("/employees", selectedRow);
      await queryClient.invalidateQueries("employees");
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

  const archivedRecord = async (id) => {
    setFormDisable(true);
    try {
      const response = await axios.patch(`/employees/${id}`);
      console.log(response.data);

      await queryClient.invalidateQueries("employees");
      await queryClient.invalidateQueries("archivedEmployees");
      setAlertSeverity("success");
      setAlertMsg("Record archived successfully.");
      setConfirmationModel((prev) => ({ ...prev, open: false }));
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setAlertMsg("An error occurred while archiving the record.");
      setAlertSeverity("error");
    }

    setAlertOpen(true);
    setFormDisable(false);
  };

  const handleEditBtnClick = (id) => {
    const row = employees.find((record) => record.id === id);
    console.log(row);

    setSelectedRow(row);
    setEditModalOpen(true);
  };

  const handleFilterSubmit = () => {
    const filtered = employees.filter((record) => {
      return Object.keys(filters).every((key) => {
        if (filters[key] === "") return true; // Ignore empty filters
        return (
          String(record[key]).toLowerCase() ===
          String(filters[key]).toLowerCase()
        );
      });
    });
    setFilteredRecords(filtered);
    setFilterModalOpen(false);
    setAlertSeverity("success");
    setAlertMsg("Filter Applied");
    setAlertOpen(true);
  };

  return (
    <>
      {/* <Collapse in={true}>
        <Box bgcolor={"primary.main"} width={"100%"} p={3}></Box>
      </Collapse> */}
      <DataGrid
        loading={false}
        rows={filteredRecords}
        // checkboxSelection
        columns={[
          ...EMPLOYEES_TABLE_COLUMN,
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
                  onClick={() => handleEditBtnClick(params.id)}
                >
                  <Edit>edit</Edit>
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() =>
                    setConfirmationModel((prev) => ({
                      ...prev,
                      open: true,
                      title: "Confirm Archive",
                      content: "Are you sure you want to archive this record?",
                      onsubmit: () => archivedRecord(params.id),
                    }))
                  }
                >
                  <Archive>delete</Archive>
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
              titleText="Employee Records"
              subText={"Employees directory overview."}
              actionBtn={
                <>
                  {/* <TableFilterBtn /> */}
                  <TableQuickFilter />
                  <Button
                    variant="outlined"
                    sx={{ py: 1, flexShrink: 0 }}
                    startIcon={<FilterList />}
                    onClick={() => setFilterModalOpen(true)}
                  >
                    Filters
                  </Button>
                  <Button
                    startIcon={<Add />}
                    variant="contained"
                    sx={{
                      color: "#FFF",
                      py: 1,
                      flexShrink: 0,
                    }}
                    onClick={() => setAddModalOpen(true)}
                  >
                    New Employee
                  </Button>
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
            content: "Are you sure you want to add this student record?",
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

      <FilterModal
        open={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        filters={filters}
        setFilters={setFilters}
        handleClearFilter={() => {
          setFilters(filterInitialValues);
          setFilteredRecords(employees);
        }}
        handleSubmit={(e) => {
          e.preventDefault();
          handleFilterSubmit();
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
        position={{ horizontal: "right", vertical: "bottom" }}
      />
    </>
  );
};

export default Records;
