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
import { LIST_OF_PROGRAM } from "../../utils/constant";

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
            value={selectedRow?.fname}
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
            value={selectedRow?.mname}
            onChange={handleFormChange}
          />
          <TextField
            required
            margin="dense"
            fullWidth
            label="Last name"
            variant="outlined"
            name="lname"
            value={selectedRow?.lname}
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
            value={selectedRow?.address}
            onChange={handleFormChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Program</InputLabel>
            <Select
              required
              label="Program"
              name="program"
              value={selectedRow?.program}
              onChange={handleFormChange}
            >
              {LIST_OF_PROGRAM?.map((v) => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Year Level</InputLabel>
            <Select
              required
              label="Year Level"
              name="yearLevel"
              value={selectedRow?.yearLevel}
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
              value={selectedRow?.section}
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
            type="email"
            value={selectedRow?.email}
            onChange={handleFormChange}
          />

          <TextField
            margin="dense"
            fullWidth
            label="Comorbidity"
            variant="outlined"
            name="comorbidity"
            value={selectedRow?.comorbidity}
            onChange={handleFormChange}
          />

          <TextField
            margin="dense"
            fullWidth
            label="Socio Economic Status"
            variant="outlined"
            name="socioEconomicStatus"
            value={selectedRow?.socioEconomicStatus}
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
              value={selectedRow?.gender}
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
                <Collapse in={selectedRow?.gender == "OTHER"}>
                  <TextField
                    variant="standard"
                    autoFocus
                    name="otherGender"
                    value={selectedRow?.otherGender}
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
              value={selectedRow?.spcResident}
            >
              <FormControlLabel
                checked={selectedRow?.spcResident === "YES" ? true : false}
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
              value={selectedRow?.PWD}
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
              value={selectedRow?.governmentBenificiaries}
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

export default EditRecordModal;
