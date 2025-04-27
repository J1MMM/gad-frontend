import React, { useEffect } from "react";
import { ContainerModal } from "../../components/shared/ContainerModal";
import { Box, Button, Typography } from "@mui/material";
import Fieldset from "../../components/shared/Fieldset";
import CustomTextField from "../../components/shared/CustomTextField";
import CustomRadioGroup from "../../components/shared/CustomRadioGroup";
import dayjs from "dayjs";

function EditRecordModal({
  open,
  onClose,
  setSelectedRow,
  selectedRow,
  handleSubmit,
}) {
  const handleFormChange = (e) => {
    setSelectedRow((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const birthDate = dayjs(selectedRow?.birthDate).format("YYYY-MM-DD");

  return (
    <ContainerModal
      open={open}
      onClose={onClose}
      title="Edit Employee Record"
      maxWidth="md"
      actionButton={
        <>
          <Button size="small" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button size="small" variant="contained" type="submit">
            Save
          </Button>
        </>
      }
      onSubmit={handleSubmit}
    >
      <Fieldset title={"Personal Information"}>
        <CustomTextField
          label="Employee ID Number"
          name="employeeIdNo"
          onChange={handleFormChange}
          value={selectedRow?.employeeIdNo}
        />
        <CustomTextField
          label="Fullname:"
          name="fullname"
          onChange={handleFormChange}
          value={selectedRow?.fullname}
        />

        <CustomTextField
          label="Date of Birth (MM/DD/YYYY):"
          name="birthDate"
          onChange={handleFormChange}
          value={birthDate}
          type={"date"}
        />

        <CustomTextField
          label="Age:"
          name="age"
          onChange={handleFormChange}
          value={selectedRow?.age}
          type="number"
          width={50}
        />

        <CustomTextField
          label="Barangay:"
          name="brgy"
          onChange={handleFormChange}
          value={selectedRow?.brgy}
        />
        <CustomTextField
          label="Municipal/City:"
          name="city"
          onChange={handleFormChange}
          value={selectedRow?.city}
        />
        <CustomTextField
          label="Province:"
          name="province"
          onChange={handleFormChange}
          value={selectedRow?.province}
        />

        <CustomTextField
          label="Email:"
          name="email"
          onChange={handleFormChange}
          value={selectedRow?.email}
          type="email"
          width={250}
        />

        <CustomTextField
          label="Department/Unit:"
          name="department"
          onChange={handleFormChange}
          value={selectedRow?.department}
        />

        <CustomTextField
          label="Position/Designation:"
          name="position"
          onChange={handleFormChange}
          value={selectedRow?.position}
        />

        <CustomRadioGroup
          name="civilStatus"
          onChange={handleFormChange}
          label="Civil Status:"
          options={["Single", "Married", "Separated", "Widowed"]}
          value={selectedRow?.civilStatus}
        />

        <CustomRadioGroup
          label="Sex Assigned at Birth:"
          name="sex"
          onChange={handleFormChange}
          options={["Male", "Female"]}
          value={selectedRow?.sex}
        />
        <CustomRadioGroup
          name="gender"
          onChange={handleFormChange}
          label="Gender Identity:"
          value={selectedRow?.gender}
          options={[
            "Man",
            "Woman",
            "Transgender",
            "Non-binary",
            "Prefer not to say",
            "Other",
          ]}
          otherTextField="otherGender"
          otherTextFieldValue={selectedRow?.otherGender}
        />
        <CustomRadioGroup
          label="Sexual Orientation(Optional):"
          name="sexualOrientation"
          onChange={handleFormChange}
          value={selectedRow?.sexualOrientation}
          options={[
            "Heterosexual",
            "Homosexual",
            "Bisexual",
            "Prefer not to say",
            "Other",
          ]}
          otherTextField="otherSexualOrientation"
          otherTextFieldValue={selectedRow?.otherSexualOrientation}
          required={false}
        />

        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <CustomRadioGroup
            label="Disability Status:"
            name="disabilityStatus"
            onChange={handleFormChange}
            value={selectedRow?.disabilityStatus}
            options={["With Disability", "Without Disability"]}
          />

          {selectedRow?.disabilityStatus == "With Disability" && (
            <CustomTextField
              label="If with disability, please specify:"
              name="disabilitySpecify"
              onChange={handleFormChange}
              value={selectedRow?.disabilitySpecify}
            />
          )}
        </Box>

        <CustomTextField
          label="Ethnic Group/Indigenous Group(if applicable):"
          name="ethnicGroup"
          onChange={handleFormChange}
          value={selectedRow?.ethnicGroup}
          required={false}
        />

        <CustomRadioGroup
          name="spcResident"
          onChange={handleFormChange}
          label="Are you a resident of San Pablo City?"
          options={["Yes", "No"]}
          value={selectedRow?.spcResident}
        />
      </Fieldset>

      <Fieldset title={"Family Information"}>
        <CustomTextField
          label="Number of Dependents:"
          name="noOfDependents"
          onChange={handleFormChange}
          value={selectedRow?.noOfDependents}
        />

        <CustomRadioGroup
          label="Are you a Solo Parent?"
          name="soloParent"
          onChange={handleFormChange}
          options={["Yes", "No"]}
          value={selectedRow?.soloParent}
        />

        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <CustomRadioGroup
            label="Are you a person with caregiving responsibilities(children, elders, PWD)?"
            name="caregivingResponsibilities"
            value={selectedRow?.caregivingResponsibilities}
            onChange={handleFormChange}
            options={["Yes", "No"]}
          />

          {selectedRow?.caregivingResponsibilities == "Yes" && (
            <CustomTextField
              label="If yes, specify:"
              name="caregivingResponsibilitiesSpecify"
              onChange={handleFormChange}
              value={selectedRow?.caregivingResponsibilitiesSpecify}
            />
          )}
        </Box>
      </Fieldset>
      <Fieldset title={"Educational Attainment"}>
        <CustomRadioGroup
          label=""
          name="educationalAttainment"
          value={selectedRow?.educationalAttainment}
          onChange={handleFormChange}
          options={[
            "High School Graduate",
            "Vocational/Technical",
            "Collage Graduate",
            "Master's Degree",
            "Doctoral Degree",
            "Other",
          ]}
          otherTextField={"otherEducationalAttainment"}
          otherTextFieldValue={selectedRow?.otherEducationalAttainment}
        />
      </Fieldset>
      <Fieldset title={"Employment Information"}>
        <CustomRadioGroup
          label="Employment Status:"
          name="employmentStatus"
          value={selectedRow?.employmentStatus}
          onChange={handleFormChange}
          options={["Permanent", "Contractual", "Job Order", "Casual", "Other"]}
          otherTextField={"otherEmploymentStatus"}
          otherTextFieldValue={selectedRow?.otherEmploymentStatus}
        />
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <CustomTextField
            label="Length of Service in the Organization:"
            name="lengthOfService"
            value={selectedRow?.lengthOfService}
            onChange={handleFormChange}
            width={30}
          />
          <Typography variant="body2" fontWeight="bold">
            years
          </Typography>
        </Box>
        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <CustomRadioGroup
            label="Have you attended any Gender Sensitivity Trainings?"
            name="attendGenderSensitivityTraining"
            value={selectedRow?.attendGenderSensitivityTraining}
            onChange={handleFormChange}
            options={["Yes", "No"]}
          />

          {selectedRow?.attendGenderSensitivityTraining == "Yes" && (
            <CustomTextField
              label="If yes, indicate year and title of trainings:"
              name="yearAndTitleOfTraining"
              value={selectedRow?.yearAndTitleOfTraining}
              onChange={handleFormChange}
            />
          )}
        </Box>
      </Fieldset>
      <Fieldset title={"Additional Remarks/Notes(Optional)"}>
        <CustomTextField
          label="Remarks/Notes:"
          name="remarks"
          value={selectedRow?.remarks}
          onChange={handleFormChange}
          required={false}
        />
      </Fieldset>
    </ContainerModal>
  );
}

export default EditRecordModal;
