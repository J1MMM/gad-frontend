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

function FilterModal({ open, onClose, setFormData, formData, handleSubmit }) {
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ContainerModal
      open={open}
      onClose={onClose}
      title="Filters"
      maxWidth="xs"
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
      <Stack></Stack>
    </ContainerModal>
  );
}

export default FilterModal;
