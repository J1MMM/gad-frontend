import React, { useState } from "react";
import { ContainerModal } from "../../components/shared/ContainerModal";
import {
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { LIST_OF_PROGRAM } from "../../utils/constant";
import CustomTextField from "../../components/shared/CustomTextField";
import CustomRadioGroup from "../../components/shared/CustomRadioGroup";

function FilterModal({
  open,
  onClose,
  filters,
  setFilters,
  handleSubmit,
  handleClearFilter,
}) {
  const handleFormChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ContainerModal
      open={open}
      onClose={onClose}
      title="Filters"
      maxWidth="md"
      actionButton={
        <>
          <Button size="small" variant="outlined" onClick={handleClearFilter}>
            Clear
          </Button>
          <Button size="small" variant="contained" type="submit">
            Apply Filters
          </Button>
        </>
      }
      onSubmit={handleSubmit}
    >
      <Stack gap={1}>
        <Stack direction="row" spacing={1}>
          <TextField
            label="Student ID No."
            name="studentIdNo"
            value={filters?.studentIdNo}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            label="Fullname"
            name="fullname"
            value={filters?.fullname}
            onChange={handleFormChange}
            fullWidth
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField
            label="School/University"
            name="school"
            value={filters?.school}
            onChange={handleFormChange}
            fullWidth
          />
        </Stack>

        <Stack direction="row" spacing={1}>
          <TextField
            label="Course/Program"
            name="program"
            value={filters?.program}
            onChange={handleFormChange}
            fullWidth
          />

          <FormControl fullWidth margin="dense">
            <InputLabel>Year Level</InputLabel>
            <Select
              label="Year Level"
              name="yearLevel"
              value={filters.yearLevel}
              onChange={handleFormChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1">1ST YEAR</MenuItem>
              <MenuItem value="2">2ND YEAR</MenuItem>
              <MenuItem value="3">3RD YEAR</MenuItem>
              <MenuItem value="4">4TH YEAR</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Section</InputLabel>
            <Select
              label="Section"
              name="section"
              value={filters.section}
              onChange={handleFormChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
              <MenuItem value="F">F</MenuItem>
              <MenuItem value="G">G</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <CustomRadioGroup
          label={"Sex:"}
          name="sex"
          value={filters.sex}
          options={["Male", "Female"]}
          onChange={handleFormChange}
          required={false}
        />

        <CustomRadioGroup
          label={"Gender:"}
          name="gender"
          value={filters.gender}
          options={[
            "Male",
            "Female",
            "Non-binary",
            "Prefer not to say",
            "Other",
          ]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"Preferred Pronouns:"}
          name="pronouns"
          value={filters.pronouns}
          options={["He/Him", "Her/She", "They/Them", "Other"]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"Civil Status:"}
          name="civilStatus"
          value={filters.civilStatus}
          options={["Single", "Married", "Separated"]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"Person with disability:"}
          name="PWD"
          value={filters.PWD}
          options={["Yes", "No"]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"SPC Resident:"}
          name="spcResident"
          value={filters.spcResident}
          options={["Yes", "No"]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"Government Benificiaries:"}
          name="governmentBenificiaries"
          value={filters.governmentBenificiaries}
          options={["Yes", "No"]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
      </Stack>
    </ContainerModal>
  );
}

export default FilterModal;
