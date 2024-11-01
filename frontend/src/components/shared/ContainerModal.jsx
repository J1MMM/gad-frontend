import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

export const ContainerModal = ({
  children,
  actionButton,
  title,
  open,
  onClose,
  onSubmit,
  maxWidth,
}) => {
  return (
    <Dialog
      component={"form"}
      maxWidth={maxWidth || "md"}
      open={open}
      onClose={onClose}
      fullWidth
      onSubmit={onSubmit}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
          color: "#ffffff",
          fontWeight: 600, // Correct weight for semi-bold
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent
        dividers
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {children}
      </DialogContent>

      <DialogActions>{actionButton}</DialogActions>
    </Dialog>
  );
};
