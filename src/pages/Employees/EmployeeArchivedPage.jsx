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
  studentIdNo: "",
  fullname: "",
  brgy: "",
  city: "",
  province: "",
  age: "",
  sex: "",
  gender: "",
  otherGender: "",
  pronouns: "",
  otherPronouns: "",
  civilStatus: "",
  nationality: "",
  school: "",
  program: "",
  yearLevel: "",
  scholarship: "",
  academicStanding: "",
  otherAcademicStanding: "",
  livingArrangement: "",
  householdIncomeLevel: "",
  parttimeJob: "",
  sourceFinancialSupport: "",
  otherSourceFinancialSupport: "",
  disability: "",
  specifyDisability: "",
  accessHealthcare: "",
  healthInsuranceProgram: "",
  stressAnxiety: "",
  discrimination: "",
  studentOrganizations: "",
  specifyStudentOrganizations: "",
  GADSeminar: "",
  InterestedGADSeminar: "",
  email: "",
  address: "",
  section: "",
  governmentBenificiaries: "",
  comorbidity: "",
  PWD: "",
  socioEconomicStatus: "",
  spcResident: "",
  archived: false,
};

const EmployeeArchivedPage = () => {
  const { archivedEmployees } = useData();
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

  const deleteRecord = async (id) => {
    setFormDisable(true);
    try {
      const response = await axios.delete(`/employees/${id}`);
      console.log(response.data);

      await queryClient.invalidateQueries("archivedEmployees");
      setAlertSeverity("success");
      setAlertMsg("Employee data deleted successfully.");
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
      const response = await axios.put(`/employees/${id}`);
      console.log(response.data);

      await queryClient.invalidateQueries("archivedEmployees");
      await queryClient.invalidateQueries("employees");
      setAlertSeverity("success");
      setAlertMsg("Employee data restored successfully.");
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
      <DataGrid
        loading={false}
        rows={archivedEmployees}
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
              titleText="Archived Employee Records"
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
