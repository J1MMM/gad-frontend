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
            label="Employee ID No."
            name="employeeIdNo"
            value={filters?.employeeIdNo}
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
            label="Department/Unit"
            name="department"
            value={filters?.department}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            label="Position/Designation"
            name="position"
            value={filters?.position}
            onChange={handleFormChange}
            fullWidth
          />
        </Stack>

        <CustomRadioGroup
          label={"Sex Assigned at Birth:"}
          name="sex"
          value={filters.sex}
          options={["Male", "Female"]}
          onChange={handleFormChange}
          required={false}
        />

        <CustomRadioGroup
          label={"Gender Identity:"}
          name="gender"
          value={filters.gender}
          options={[
            "Man",
            "Woman",
            "Transgender",
            "Non-binary",
            "Prefer not to say",
            "Other",
          ]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"Sexual Orientation:"}
          name="sexualOrientation"
          value={filters.sexualOrientation}
          options={[
            "Heterosexual",
            "Homosexual",
            "Bisexual",
            "Prefer not to say",
            "Other",
          ]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"Civil Status:"}
          name="civilStatus"
          value={filters.civilStatus}
          options={["Single", "Married", "Separated", "Widowed"]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
        <CustomRadioGroup
          label={"Solo Parent?"}
          name="soloParent"
          value={filters.soloParent}
          options={["Yes", "No"]}
          onChange={handleFormChange}
          required={false}
        />
        <CustomRadioGroup
          label={"Person with disability:"}
          name="disabilityStatus"
          value={filters.disabilityStatus}
          options={["With Disability", "Without Disability"]}
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
          label={"Educational Attainment:"}
          name="educationalAttainment"
          value={filters.educationalAttainment}
          options={[
            "High School Graduate",
            "Vocational/Technical",
            "Collage Graduate",
            "Master's Degree",
            "Doctoral Degree",
            "Other",
          ]}
          onChange={handleFormChange}
          required={false}
          disableOtherTxtField={true}
        />
      </Stack>
    </ContainerModal>
  );
}

export default FilterModal;
