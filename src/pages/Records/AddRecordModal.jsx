import React from "react";
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

function AddRecordModal({
  open,
  onClose,
  setFormData,
  formData,
  handleSubmit,
}) {
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <ContainerModal
      open={open}
      onClose={onClose}
      title="Add Record"
      maxWidth="md"
      actionButton={
        <>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </>
      }
      onSubmit={handleSubmit}
    >
      <Stack>
        <Stack direction="row" gap={1}>
          <TextField
            required
            margin="dense"
            fullWidth
            label="Firstname"
            variant="outlined"
            name="fname"
            onChange={handleFormChange}
            value={formData?.fname}
            // slotProps={{
            //   input: {
            //     readOnly: props?.readOnly,
            //   },
            // }}
          />
          <TextField
            required
            margin="dense"
            fullWidth
            label="Middle name"
            variant="outlined"
            name="mname"
            value={formData?.mname}
            onChange={handleFormChange}
          />
          <TextField
            required
            margin="dense"
            fullWidth
            label="Last name"
            variant="outlined"
            name="lname"
            value={formData?.lname}
            onChange={handleFormChange}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <TextField
            required
            margin="dense"
            fullWidth
            label="Address"
            variant="outlined"
            name="address"
            value={formData?.address}
            onChange={handleFormChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Program</InputLabel>
            <Select
              required
              label="Program"
              name="program"
              value={formData?.program}
              onChange={handleFormChange}
            >
              <MenuItem value="BSIT">BSIT</MenuItem>
              <MenuItem value="BSIS">BSIS</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Year Level</InputLabel>
            <Select
              required
              label="Year Level"
              name="yearLevel"
              value={formData?.yearLevel}
              onChange={handleFormChange}
            >
              <MenuItem value="1">1ST YEAR</MenuItem>
              <MenuItem value="2">2ND YEAR</MenuItem>
              <MenuItem value="3">3RD YEAR</MenuItem>
              <MenuItem value="4">4TH YEAR</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Section</InputLabel>
            <Select
              required
              label="Section"
              name="section"
              value={formData?.section}
              onChange={handleFormChange}
            >
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

        <Stack direction="row" gap={1}>
          <TextField
            required
            margin="dense"
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={formData?.email}
            onChange={handleFormChange}
          />

          <TextField
            required
            margin="dense"
            fullWidth
            label="Comorbidity"
            variant="outlined"
            name="comorbidity"
            value={formData?.comorbidity}
            onChange={handleFormChange}
          />

          <TextField
            required
            margin="dense"
            fullWidth
            label="Socio Economic Status"
            variant="outlined"
            name="socioEconomicStatus"
            value={formData?.socioEconomicStatus}
            onChange={handleFormChange}
          />
          {/* <TextField 
            required

            margin="dense"
            fullWidth
            label="Program/Year Level/Section"
            variant="outlined"
            name="address"
            /> */}
        </Stack>
        <Stack gap={2} mt={2}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              onChange={handleFormChange}
              value={formData?.gender}
            >
              <FormControlLabel
                value="MALE"
                control={<Radio required />}
                label="MALE"
              />
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
              <Stack direction="row" alignItems="center">
                <FormControlLabel
                  value="OTHER"
                  label="OTHER"
                  control={<Radio />}
                />
                <Collapse in={formData?.gender == "OTHER"}>
                  <TextField
                    variant="standard"
                    autoFocus
                    name="otherGender"
                    value={formData?.otherGender}
                    onChange={handleFormChange}
                    sx={{}}
                  />
                </Collapse>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Are you a resident of San Pablo City?</FormLabel>
            <RadioGroup
              name="spcResident"
              onChange={handleFormChange}
              value={formData?.spcResident}
            >
              <FormControlLabel
                value="YES"
                control={<Radio required />}
                label="Yes, I live here in San Pablo Area or in one of the barangays here in San Pablo"
              />
              <FormControlLabel
                value="NO"
                control={<Radio />}
                label="No, I live outside San Pablo Area"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>
              Do you have physical or emotional limitation or a Persons With
              Disability (PWD)?
            </FormLabel>
            <RadioGroup
              name="PWD"
              onChange={handleFormChange}
              value={formData?.PWD}
            >
              <FormControlLabel
                value="YES"
                control={<Radio required />}
                label="YES"
              />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Government Benificiaries</FormLabel>
            <RadioGroup
              name="governmentBenificiaries"
              onChange={handleFormChange}
              value={formData?.governmentBenificiaries}
            >
              <FormControlLabel
                value="YES"
                control={<Radio required />}
                label="YES"
              />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>
    </ContainerModal>
  );
}

export default AddRecordModal;
