import {
  Avatar,
  Badge,
  Button,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { getGridStringOperators } from "@mui/x-data-grid";

export const HEADER_HEIGHT = 90;

export const BASE_URL = "https://gad-backend.onrender.com";
// export const BASE_URL = "http://localhost:3500";

export const DATA_GRID_STYLE = {
  "& .MuiDataGrid-row": {
    "&:last-child .MuiDataGrid-cell": {
      borderBottom: "none", // Remove bottom border from last row
    },
  },
  // ".MuiDataGrid-columnHeaderTitleContainer": {
  //   bgcolor: "primary.main",
  // },

  ".data-grid-header": {
    // bgcolor: "primary.main",
    // color: "#FFF",
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
    "&.MuiDataGrid-root": {
      border: "none",
      // color: "#FFF",
    },
    ".MuiIconButton-sizeSmall": {
      color: "#075FC8",
    },
  },
  border: "none", // Add a border
};

export const RECORDS_TABLE_COLUMN = [
  {
    field: "studentIdNo",
    headerName: "Student No.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "fullname",
    headerName: "Fullname",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "completeAddress",
    headerName: "Address",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "programYearSection",
    headerName: "Program/Year Level/Section",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "sex",
    headerName: "Sex",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) =>
      params.row.gender == "Other" ? params.row.otherGender : params.row.gender,
  },

  {
    field: "pronouns",
    headerName: "Pronouns",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) =>
      params.row.pronouns == "Other"
        ? params.row.otherPronouns
        : params.row.pronouns,
  },
  {
    field: "disability",
    headerName: "PWD",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
];

export const EMPLOYEES_TABLE_COLUMN = [
  {
    field: "employeeIdNo",
    headerName: "Employee No.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "fullname",
    headerName: "Fullname",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "completeAddress",
    headerName: "Address",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "department",
    headerName: "Department/Unit",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "sex",
    headerName: "Sex",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) =>
      params.row.gender == "Other" ? params.row.otherGender : params.row.gender,
  },

  {
    field: "sexualOrientation",
    headerName: "Sexual Orientation",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) =>
      params.row.sexualOrientation == "Other"
        ? params.row.otherSexualOrientation
        : params.row.sexualOrientation,
  },
  {
    field: "disabilityStatus",
    headerName: "Disability Status",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
];

export const LIST_OF_PROGRAM = [
  "BSBA",
  "BSOA",
  "BSHM",
  "BS Tourism",
  "BSIT",
  "BSIS",
  "BSA",
  "BSAT",
  "BSPsy",
  "AB Polsci",
  "AB Comm",
  "BSEco ",
  "BSED",
  "BEED",
];
