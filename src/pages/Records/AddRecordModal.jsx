import React from "react";
import { ContainerModal } from "../../components/shared/ContainerModal";
import { Box, Button } from "@mui/material";
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
      title="Add new student record"
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
          label="Student ID Number:"
          name="studentIdNo"
          onChange={handleFormChange}
          value={formData?.studentIdNo}
        />
        <CustomTextField
          label="Fullname:"
          name="fullname"
          onChange={handleFormChange}
          value={formData?.fullname}
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
          label="Email:"
          name="email"
          onChange={handleFormChange}
          value={formData?.email}
          type="email"
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
          label="Nationality:"
          name="nationality"
          onChange={handleFormChange}
          value={formData?.nationality}
        />

        <CustomRadioGroup
          name="spcResident"
          onChange={handleFormChange}
          label="Are you a resident of San Pablo City?"
          options={["Yes", "No"]}
          value={formData?.spcResident}
        />

        <CustomRadioGroup
          name="sex"
          onChange={handleFormChange}
          label="Sex Assigned at Birth:"
          options={["Male", "Female"]}
          value={formData?.sex}
        />
        <CustomRadioGroup
          name="gender"
          onChange={handleFormChange}
          label="Gender Identity:"
          value={formData?.gender}
          options={[
            "Male",
            "Female",
            "Non-binary ",
            "Prefer not to say",
            "Other",
          ]}
          otherTextField="otherGender"
          otherTextFieldValue={formData?.otherGender}
        />
        <CustomRadioGroup
          name="pronouns"
          onChange={handleFormChange}
          label="Preferred Pronouns:"
          value={formData?.pronouns}
          options={["He/Him", "She/Her", "They/Them", "Other"]}
          otherTextField="otherPronouns"
          otherTextFieldValue={formData?.otherPronouns}
        />

        <CustomRadioGroup
          name="civilStatus"
          onChange={handleFormChange}
          label="Civil Status:"
          options={["Single", "Married", "Separated", "Widowed"]}
          value={formData?.civilStatus}
        />
      </Fieldset>

      <Fieldset title={"Academic Information"}>
        <CustomTextField
          label="School/University:"
          name="school"
          onChange={handleFormChange}
          value={formData?.school}
        />
        <CustomTextField
          label="Course/Program:"
          name="program"
          onChange={handleFormChange}
          value={formData?.program}
        />

        <CustomRadioGroup
          name="yearLevel"
          onChange={handleFormChange}
          label="Year Level:"
          value={formData?.yearLevel}
          options={["1", "2", "3", "4"]}
        />

        <CustomRadioGroup
          name="section"
          onChange={handleFormChange}
          label="Section:"
          value={formData?.section}
          options={["A", "B", "C", "D", "E", "F", "G"]}
        />
        <CustomRadioGroup
          name="scholarship"
          onChange={handleFormChange}
          label="Scholarship/Financial Aid Recipient:"
          value={formData?.scholarship}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          label="Academic Standing:"
          name="academicStanding"
          onChange={handleFormChange}
          value={formData?.academicStanding}
          options={["Good", "Probationary", "Other"]}
          otherTextField="otherAcademicStanding"
          otherTextFieldValue={formData?.otherAcademicStanding}
        />
      </Fieldset>

      <Fieldset title={"Socioeconomic Information"}>
        <CustomRadioGroup
          name="livingArrangement"
          onChange={handleFormChange}
          label="Living Arrangement:"
          value={formData?.livingArrangement}
          options={["With Parents", "Dormitory", "Boarding House", "Alone"]}
        />
        <CustomRadioGroup
          name="householdIncomeLevel"
          onChange={handleFormChange}
          label="Household Income Level:"
          value={formData?.householdIncomeLevel}
          options={["Low Income", "Middle Income", "High Income"]}
        />
        <CustomRadioGroup
          name="parttimeJob"
          onChange={handleFormChange}
          label="Do you have a part-time job?"
          value={formData?.parttimeJob}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="governmentBenificiaries"
          onChange={handleFormChange}
          label="Government Benificiaries?"
          value={formData?.governmentBenificiaries}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="sourceFinancialSupport"
          onChange={handleFormChange}
          label="Source of Financial Support:"
          value={formData?.sourceFinancialSupport}
          options={[
            "Parents/Family",
            "Scholarship",
            "Self-supporting",
            "Other",
          ]}
          otherTextField="otherSourceFinancialSupport"
          otherTextFieldValue={formData?.otherSourceFinancialSupport}
        />

        <CustomTextField
          label="Socio Economic Status"
          name="socioEconomicStatus"
          onChange={handleFormChange}
          value={formData?.socioEconomicStatus}
        />
      </Fieldset>
      <Fieldset title={"Health and Well-being"}>
        <Box display="flex" alignItems="center">
          <CustomRadioGroup
            label="Do you have any disabilities?"
            name="disability"
            onChange={handleFormChange}
            value={formData?.disability}
            options={["Yes", "No"]}
          />

          {formData?.disability == "Yes" && (
            <CustomTextField
              label="If Yes, specify"
              name="specifyDisability"
              onChange={handleFormChange}
              value={formData?.specifyDisability}
            />
          )}
        </Box>
        <CustomTextField
          label="Comorbidity"
          name="comorbidity"
          onChange={handleFormChange}
          value={formData?.comorbidity}
        />
        <CustomRadioGroup
          name="accessHealthcare"
          onChange={handleFormChange}
          label="Do you have access to healthcare?"
          value={formData?.accessHealthcare}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="healthInsuranceProgram"
          onChange={handleFormChange}
          label="Are you a member of a health insurance program?"
          value={formData?.healthInsuranceProgram}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="stressAnxiety"
          onChange={handleFormChange}
          label="Do you experience stress/anxiety related to gender identity or discrimination?"
          value={formData?.stressAnxiety}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="discrimination"
          onChange={handleFormChange}
          label="Have you experienced any form of gender-based violence or discrimination?"
          value={formData?.discrimination}
          options={["Yes", "No", "Prefer not to say"]}
        />
      </Fieldset>
      <Fieldset title={"Participation in Gender and Development Activities"}>
        <Box>
          <CustomRadioGroup
            label="Are you a member of any gender advocacy or student organizations?"
            name="studentOrganizations"
            onChange={handleFormChange}
            value={formData?.studentOrganizations}
            options={["Yes", "No"]}
          />

          {formData?.studentOrganizations == "Yes" && (
            <CustomTextField
              label="If Yes, specify"
              name="specifyStudentOrganizations"
              onChange={handleFormChange}
              value={formData?.specifyStudentOrganizations}
            />
          )}
        </Box>

        <CustomRadioGroup
          name="GADSeminar"
          onChange={handleFormChange}
          label="Have you attended any Gender and Development (GAD) training, seminar, or workshop?"
          value={formData?.GADSeminar}
          options={["Yes", "No"]}
        />

        <CustomRadioGroup
          name="InterestedGADSeminar"
          onChange={handleFormChange}
          label="Are you interested in participating in future GAD programs?"
          value={formData?.InterestedGADSeminar}
          options={["Yes", "No"]}
        />
      </Fieldset>
    </ContainerModal>
  );
}

export default AddRecordModal;
