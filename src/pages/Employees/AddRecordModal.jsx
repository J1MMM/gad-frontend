import React from "react";
import { ContainerModal } from "../../components/shared/ContainerModal";
import { Box, Button, TextField, Typography } from "@mui/material";
import Fieldset from "../../components/shared/Fieldset";
import CustomTextField from "../../components/shared/CustomTextField";
import CustomRadioGroup from "../../components/shared/CustomRadioGroup";

function AddRecordModal({
  open,
  onClose,
  setFormData,
  formData,
  handleSubmit,
}) {
  console.log("formData");
  console.log(formData);

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ContainerModal
      open={open}
      onClose={onClose}
      title="Add new employee record"
      maxWidth="md"
      actionButton={
        <>
          <Button size="small" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button size="small" variant="contained" type="submit">
            Submit
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
          value={formData?.employeeIdNo}
        />
        <CustomTextField
          label="Fullname:"
          name="fullname"
          onChange={handleFormChange}
          value={formData?.fullname}
        />

        <CustomTextField
          label="Date of Birth (MM/DD/YYYY):"
          name="birthDate"
          onChange={handleFormChange}
          value={formData?.birthDate}
          type={"date"}
        />

        <CustomTextField
          label="Age:"
          name="age"
          onChange={handleFormChange}
          value={formData?.age}
          type="number"
          width={50}
        />

        <CustomTextField
          label="Barangay:"
          name="brgy"
          onChange={handleFormChange}
          value={formData?.brgy}
        />
        <CustomTextField
          label="Municipal/City:"
          name="city"
          onChange={handleFormChange}
          value={formData?.city}
        />
        <CustomTextField
          label="Province:"
          name="province"
          onChange={handleFormChange}
          value={formData?.province}
        />

        <CustomTextField
          label="Email:"
          name="email"
          onChange={handleFormChange}
          value={formData?.email}
          type="email"
          width={250}
        />

        <CustomTextField
          label="Department/Unit:"
          name="department"
          onChange={handleFormChange}
          value={formData?.department}
        />

        <CustomTextField
          label="Position/Designation:"
          name="position"
          onChange={handleFormChange}
          value={formData?.position}
        />

        <CustomRadioGroup
          name="civilStatus"
          onChange={handleFormChange}
          label="Civil Status:"
          options={["Single", "Married", "Separated", "Widowed"]}
          value={formData?.civilStatus}
        />

        <CustomRadioGroup
          label="Sex Assigned at Birth:"
          name="sex"
          onChange={handleFormChange}
          options={["Male", "Female"]}
          value={formData?.sex}
        />
        <CustomRadioGroup
          name="gender"
          onChange={handleFormChange}
          label="Gender Identity:"
          value={formData?.gender}
          options={[
            "Man",
            "Woman",
            "Transgender",
            "Non-binary",
            "Prefer not to say",
            "Other",
          ]}
          otherTextField="otherGender"
          otherTextFieldValue={formData?.otherGender}
        />
        <CustomRadioGroup
          label="Sexual Orientation(Optional):"
          name="sexualOrientation"
          onChange={handleFormChange}
          value={formData?.sexualOrientation}
          options={[
            "Heterosexual",
            "Homosexual",
            "Bisexual",
            "Prefer not to say",
            "Other",
          ]}
          otherTextField="otherSexualOrientation"
          otherTextFieldValue={formData?.otherSexualOrientation}
          required={false}
        />

        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <CustomRadioGroup
            label="Disability Status:"
            name="disabilityStatus"
            onChange={handleFormChange}
            value={formData?.disabilityStatus}
            options={["With Disability", "Without Disability"]}
          />

          {formData?.disabilityStatus == "With Disability" && (
            <CustomTextField
              label="If with disability, please specify:"
              name="disabilitySpecify"
              onChange={handleFormChange}
              value={formData?.disabilitySpecify}
            />
          )}
        </Box>

        <CustomTextField
          label="Ethnic Group/Indigenous Group(if applicable):"
          name="ethnicGroup"
          onChange={handleFormChange}
          value={formData?.ethnicGroup}
          required={false}
        />

        <CustomRadioGroup
          name="spcResident"
          onChange={handleFormChange}
          label="Are you a resident of San Pablo City?"
          options={["Yes", "No"]}
          value={formData?.spcResident}
        />
      </Fieldset>

      <Fieldset title={"Family Information"}>
        <CustomTextField
          label="Number of Dependents:"
          name="noOfDependents"
          onChange={handleFormChange}
          value={formData?.noOfDependents}
        />

        <CustomRadioGroup
          label="Are you a Solo Parent?"
          name="soloParent"
          onChange={handleFormChange}
          options={["Yes", "No"]}
          value={formData?.soloParent}
        />

        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <CustomRadioGroup
            label="Are you a person with caregiving responsibilities(children, elders, PWD)?"
            name="caregivingResponsibilities"
            value={formData?.caregivingResponsibilities}
            onChange={handleFormChange}
            options={["Yes", "No"]}
          />

          {formData?.caregivingResponsibilities == "Yes" && (
            <CustomTextField
              label="If yes, specify:"
              name="caregivingResponsibilitiesSpecify"
              onChange={handleFormChange}
              value={formData?.caregivingResponsibilitiesSpecify}
            />
          )}
        </Box>
      </Fieldset>
      <Fieldset title={"Educational Attainment"}>
        <CustomRadioGroup
          label=""
          name="educationalAttainment"
          value={formData?.educationalAttainment}
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
          otherTextFieldValue={formData?.otherEducationalAttainment}
        />
      </Fieldset>
      <Fieldset title={"Employment Information"}>
        <CustomRadioGroup
          label="Employment Status:"
          name="employmentStatus"
          value={formData?.employmentStatus}
          onChange={handleFormChange}
          options={["Permanent", "Contractual", "Job Order", "Casual", "Other"]}
          otherTextField={"otherEmploymentStatus"}
          otherTextFieldValue={formData?.otherEmploymentStatus}
        />
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <CustomTextField
            label="Length of Service in the Organization:"
            name="lengthOfService"
            value={formData?.lengthOfService}
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
            value={formData?.attendGenderSensitivityTraining}
            onChange={handleFormChange}
            options={["Yes", "No"]}
          />

          {formData?.attendGenderSensitivityTraining == "Yes" && (
            <CustomTextField
              label="If yes, indicate year and title of trainings:"
              name="yearAndTitleOfTraining"
              value={formData?.yearAndTitleOfTraining}
              onChange={handleFormChange}
            />
          )}
        </Box>
      </Fieldset>
      <Fieldset title={"Additional Remarks/Notes(Optional)"}>
        <CustomTextField
          label="Remarks/Notes:"
          name="remarks"
          value={formData?.remarks}
          onChange={handleFormChange}
          required={false}
        />
      </Fieldset>
    </ContainerModal>
  );
}

export default AddRecordModal;
