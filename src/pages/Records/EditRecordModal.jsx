import React from "react";
import { ContainerModal } from "../../components/shared/ContainerModal";
import { Box, Button } from "@mui/material";
import Fieldset from "../../components/shared/Fieldset";
import CustomTextField from "../../components/shared/CustomTextField";
import CustomRadioGroup from "../../components/shared/CustomRadioGroup";

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
  return (
    <ContainerModal
      open={open}
      onClose={onClose}
      title="Edit Record"
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
          label="Student ID Number:"
          name="studentIdNo"
          onChange={handleFormChange}
          value={selectedRow?.studentIdNo}
        />
        <CustomTextField
          label="Fullname:"
          name="fullname"
          onChange={handleFormChange}
          value={selectedRow?.fullname}
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
          label="Email:"
          name="email"
          onChange={handleFormChange}
          value={selectedRow?.email}
          type="email"
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
          label="Nationality:"
          name="nationality"
          onChange={handleFormChange}
          value={selectedRow?.nationality}
        />

        <CustomRadioGroup
          name="spcResident"
          onChange={handleFormChange}
          label="Are you a resident of San Pablo City?"
          options={["Yes", "No"]}
          value={selectedRow?.spcResident}
        />

        <CustomRadioGroup
          name="sex"
          onChange={handleFormChange}
          label="Sex Assigned at Birth:"
          options={["Male", "Female"]}
          value={selectedRow?.sex}
        />
        <CustomRadioGroup
          name="gender"
          onChange={handleFormChange}
          label="Gender Identity:"
          value={selectedRow?.gender}
          options={[
            "Male",
            "Female",
            "Non-binary ",
            "Prefer not to say",
            "Other",
          ]}
          otherTextField="otherGender"
          otherTextFieldValue={selectedRow?.otherGender}
        />
        <CustomRadioGroup
          name="pronouns"
          onChange={handleFormChange}
          label="Preferred Pronouns:"
          value={selectedRow?.pronouns}
          options={["He/Him", "She/Her", "They/Them", "Other"]}
          otherTextField="otherPronouns"
          otherTextFieldValue={selectedRow?.otherPronouns}
        />

        <CustomRadioGroup
          name="civilStatus"
          onChange={handleFormChange}
          label="Civil Status:"
          options={["Single", "Married", "Separated"]}
          value={selectedRow?.civilStatus}
        />
      </Fieldset>

      <Fieldset title={"Academic Information"}>
        <CustomTextField
          label="School/University:"
          name="school"
          onChange={handleFormChange}
          value={selectedRow?.school}
        />
        <CustomTextField
          label="Course/Program:"
          name="program"
          onChange={handleFormChange}
          value={selectedRow?.program}
        />

        <CustomRadioGroup
          name="yearLevel"
          onChange={handleFormChange}
          label="Year Level:"
          value={selectedRow?.yearLevel}
          options={["1", "2", "3", "4"]}
        />

        <CustomRadioGroup
          name="section"
          onChange={handleFormChange}
          label="Section:"
          value={selectedRow?.section}
          options={["A", "B", "C", "D", "E", "F", "G"]}
        />
        <CustomRadioGroup
          name="scholarship"
          onChange={handleFormChange}
          label="Scholarship/Financial Aid Recipient:"
          value={selectedRow?.scholarship}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          label="Academic Standing:"
          name="academicStanding"
          onChange={handleFormChange}
          value={selectedRow?.academicStanding}
          options={["Good", "Probationary", "Other"]}
          otherTextField="otherAcademicStanding"
          otherTextFieldValue={selectedRow?.otherAcademicStanding}
        />
      </Fieldset>

      <Fieldset title={"Socioeconomic Information"}>
        <CustomRadioGroup
          name="livingArrangement"
          onChange={handleFormChange}
          label="Living Arrangement:"
          value={selectedRow?.livingArrangement}
          options={["With Parents", "Dormitory", "Boarding House", "Alone"]}
        />
        <CustomRadioGroup
          name="householdIncomeLevel"
          onChange={handleFormChange}
          label="Household Income Level:"
          value={selectedRow?.householdIncomeLevel}
          options={["Low Income", "Middle Income", "High Income"]}
        />
        <CustomRadioGroup
          name="parttimeJob"
          onChange={handleFormChange}
          label="Do you have a part-time job?"
          value={selectedRow?.parttimeJob}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="governmentBenificiaries"
          onChange={handleFormChange}
          label="Government Benificiaries?"
          value={selectedRow?.governmentBenificiaries}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="sourceFinancialSupport"
          onChange={handleFormChange}
          label="Source of Financial Support:"
          value={selectedRow?.sourceFinancialSupport}
          options={[
            "Parents/Family",
            "Scholarship",
            "Self-supporting",
            "Other",
          ]}
          otherTextField="otherSourceFinancialSupport"
          otherTextFieldValue={selectedRow?.otherSourceFinancialSupport}
        />

        <CustomTextField
          label="Socio Economic Status"
          name="socioEconomicStatus"
          onChange={handleFormChange}
          value={selectedRow?.socioEconomicStatus}
        />
      </Fieldset>
      <Fieldset title={"Health and Well-being"}>
        <Box display="flex" alignItems="center">
          <CustomRadioGroup
            label="Do you have any disabilities?"
            name="disability"
            onChange={handleFormChange}
            value={selectedRow?.disability}
            options={["Yes", "No"]}
          />

          {selectedRow?.disability == "Yes" && (
            <CustomTextField
              label="If Yes, specify"
              name="specifyDisability"
              onChange={handleFormChange}
              value={selectedRow?.specifyDisability}
            />
          )}
        </Box>
        <CustomTextField
          label="Comorbidity"
          name="comorbidity"
          onChange={handleFormChange}
          value={selectedRow?.comorbidity}
        />
        <CustomRadioGroup
          name="accessHealthcare"
          onChange={handleFormChange}
          label="Do you have access to healthcare?"
          value={selectedRow?.accessHealthcare}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="healthInsuranceProgram"
          onChange={handleFormChange}
          label="Are you a member of a health insurance program?"
          value={selectedRow?.healthInsuranceProgram}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="stressAnxiety"
          onChange={handleFormChange}
          label="Do you experience stress/anxiety related to gender identity or discrimination?"
          value={selectedRow?.stressAnxiety}
          options={["Yes", "No"]}
        />
        <CustomRadioGroup
          name="discrimination"
          onChange={handleFormChange}
          label="Have you experienced any form of gender-based violence or discrimination?"
          value={selectedRow?.discrimination}
          options={["Yes", "No", "Prefer not to say"]}
        />
      </Fieldset>
      <Fieldset title={"Participation in Gender and Development Activities"}>
        <Box>
          <CustomRadioGroup
            label="Are you a member of any gender advocacy or student organizations?"
            name="studentOrganizations"
            onChange={handleFormChange}
            value={selectedRow?.studentOrganizations}
            options={["Yes", "No"]}
          />

          {selectedRow?.studentOrganizations == "Yes" && (
            <CustomTextField
              label="If Yes, specify"
              name="specifyStudentOrganizations"
              onChange={handleFormChange}
              value={selectedRow?.specifyStudentOrganizations}
            />
          )}
        </Box>

        <CustomRadioGroup
          name="GADSeminar"
          onChange={handleFormChange}
          label="Have you attended any Gender and Development (GAD) training, seminar, or workshop?"
          value={selectedRow?.GADSeminar}
          options={["Yes", "No"]}
        />

        <CustomRadioGroup
          name="InterestedGADSeminar"
          onChange={handleFormChange}
          label="Are you interested in participating in future GAD programs?"
          value={selectedRow?.InterestedGADSeminar}
          options={["Yes", "No"]}
        />
      </Fieldset>
    </ContainerModal>
  );
}

export default EditRecordModal;
