import { Box, Button } from "@mui/material";
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
const Records = () => {
  const { records } = useData();
  const [formData, setFormData] = useState(initialFormData);
  const [confirmationShow, setConfirmationShow] = useState(false);
  const [formDisable, setFormDisable] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async () => {
    setFormDisable(true);
    try {
      const response = await axios.post("/records", formData);
      setModalOpen(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    setFormDisable(false);
    setConfirmationShow(false);
  };

  return (
    <>
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
          height: "calc(100vh - 170px)",
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
                  {/* <TableQuickFilter /> */}
                  <Button
                    variant="contained"
                    sx={{ paddingX: "20px" }}
                    onClick={() => setModalOpen(true)}
                  >
                    Add Record
                  </Button>
                </>
              }
            />
          ),
        }}
      />

      <AddRecordModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={(e) => {
          e.preventDefault();
          setConfirmationShow(true);
        }}
      />

      <ConfirmationDialog
        open={confirmationShow}
        setOpen={setConfirmationShow}
        title={"New record confirmation"}
        content={
          "Are you sure you want to save this record? Double-check the information before proceeding."
        }
        disabled={formDisable}
        confirm={handleSubmit}
      />
    </>
  );
};

export default Records;
