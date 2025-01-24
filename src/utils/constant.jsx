import logo from "../assets/images/logo.jpg";
import { Avatar, Badge, Button, Stack, styled } from "@mui/material";
import dayjs from "dayjs";
import { getGridStringOperators } from "@mui/x-data-grid";

export const HEADER_HEIGHT = 110;

// export const BASE_URL = "https://tiaong-livestock-backend.onrender.com";
export const BASE_URL = "http://localhost:3500";

export const DATA_GRID_STYLE = {
  "& .MuiDataGrid-row": {
    "&:last-child .MuiDataGrid-cell": {
      borderBottom: "none", // Remove bottom border from last row
    },
  },
  ".MuiDataGrid-columnHeaderTitleContainer": {
    bgcolor: "primary.main",
  },

  ".data-grid-header": {
    bgcolor: "primary.main",
    color: "#FFF",
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
    "&.MuiDataGrid-root": {
      border: "none",
      color: "#FFF",
    },
    ".MuiIconButton-sizeSmall": {
      color: "#FFF",
    },
  },
  border: "none", // Add a border
};

export const APPROVAL_TABLE_COLUMN = [
  {
    field: "photo",
    headerName: "Photo",
    width: 100,
    editable: false,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    renderCell: (params) => (
      <Stack justifyContent="center" alignItems="center" height="100%">
        <Avatar
          alt="Remy Sharp"
          src={params.row?.userImage}
          sx={{ border: "2px solid #007bff" }}
        />
      </Stack>
    ),
  },
  {
    field: "fullname",
    headerName: "Name",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "sex",
    headerName: "Sex",
    width: 100,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "barangay",
    headerName: "Address",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "contactNo",
    headerName: "Contact No.",
    width: 100,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "birthDate",
    headerName: "Birth date",
    width: 100,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "civilStatus",
    headerName: "Civil Status",
    width: 100,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "PWD",
    headerName: "PWD",
    width: 100,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "_4ps",
    headerName: "4P's Beneficiary",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "livelihood",
    headerName: "Main Livelihood",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "contactPersonToNotifyInCaseEmergency",
    headerName: "Emergency Phone No.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
];

export const RECORDS_TABLE_COLUMN = [
  {
    field: "fullname",
    headerName: "Fullname",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) => {
      return `${params?.row?.fname} ${params?.row?.mname} ${params?.row?.lname}`;
    },
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "program",
    headerName: "Program/Year Level/Section",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) => {
      return `${params?.row?.program} ${params?.row?.yearLevel}-${params?.row?.section}`;
    },
  },

  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "governmentBenificiaries",
    headerName: "Government Benificiaries",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "comorbidity",
    headerName: "Comorbidity",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "PWD",
    headerName: "PWD",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "socioEconomicStatus",
    headerName: "Socio Economic Status",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
];
