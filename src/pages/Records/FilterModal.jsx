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

const filterInitialValues = {
  fname: "",
  lname: "",
  email: "",
  program: "",
  yearLevel: "",
  section: "",
  gender: "",
  governmentBenificiaries: "",
  PWD: "",
  spcResident: "",
};

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
      maxWidth="sm"
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
            label="First Name"
            name="fname"
            value={filters?.fname}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lname"
            value={filters?.lname}
            onChange={handleFormChange}
            fullWidth
          />
        </Stack>
        <TextField
          label="Email"
          name="email"
          value={filters?.email}
          type="email"
          onChange={handleFormChange}
        />

        <Stack direction="row" spacing={1}>
          <FormControl fullWidth margin="dense">
            <InputLabel>Program</InputLabel>
            <Select
              label="Program"
              name="program"
              value={filters.program}
              onChange={handleFormChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="BSIT">BSIT</MenuItem>
              <MenuItem value="BSIS">BSIS</MenuItem>
            </Select>
          </FormControl>

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

        <Stack direction="row" justifyContent="space-between">
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={filters.gender}
              onChange={handleFormChange}
            >
              <FormControlLabel value="MALE" control={<Radio />} label="MALE" />
              <FormControlLabel
                value="FEMALE"
                control={<Radio />}
                label="FEMALE"
              />
              <FormControlLabel
                value="LGBTQIA+"
                control={<Radio />}
                label="LGBTQIA+"
              />
              <FormControlLabel
                value="OTHER"
                control={<Radio />}
                label="OTHER"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>PWD</FormLabel>
            <RadioGroup
              name="PWD"
              value={filters?.PWD}
              onChange={handleFormChange}
            >
              <FormControlLabel value="YES" control={<Radio />} label="YES" />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>SPC Resident</FormLabel>
            <RadioGroup
              name="spcResident"
              value={filters?.spcResident}
              onChange={handleFormChange}
            >
              <FormControlLabel value="YES" control={<Radio />} label="YES" />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Government Benificiaries</FormLabel>
            <RadioGroup
              name="governmentBenificiaries"
              value={filters?.governmentBenificiaries}
              onChange={handleFormChange}
            >
              <FormControlLabel value="YES" control={<Radio />} label="YES" />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>
    </ContainerModal>
  );
}

export default FilterModal;
