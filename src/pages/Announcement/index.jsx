import React, { useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import {
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddAnnouncementModal from "./AddAnnouncementModal";
import axios from "../../api/axios";
import SnackBar from "../../components/shared/SnackBar";
import useData from "../../hooks/useData";
import dayjs from "dayjs";
import { useQueryClient } from "react-query";
import ViewAnnouncementModal from "./ViewAnnouncementModal";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";
import { AnnouncementOutlined } from "@mui/icons-material";

const Announcement = () => {
  const { announcementData } = useData();
  const queryClient = useQueryClient();
  const [disabled, setDisabled] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [severity, setSeverity] = useState("success");
  const [editMode, setEditMode] = useState(false);
  const [errorSnackOpen, setErrorSnackOpen] = useState(false);
  const [deleteConfimationOpen, setDeleteConfimationOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    message: "",
    createdAt: null,
  });

  const handleAnnouncementSubmit = async () => {
    setDisabled(true);
    try {
      const response = await axios.post("/announcement", formData);

      await queryClient.invalidateQueries("announcementData");

      setFormData({
        id: "",
        title: "",
        message: "",
      });
      setSeverity("success");
      setAlertMsg("Announcement has been added successfully.");
      setSnackOpen(true);
      setAddModalOpen(false);
    } catch (error) {
      console.log(error);
      setSeverity("error");
      setAlertMsg("Failed to add the announcement. Please try again.");
      setSnackOpen(true);
    }
    setDisabled(false);
  };

  const handleSeeMoreClick = (val) => {
    setInfoModalOpen(true);
    setFormData({
      id: val?._id,
      title: val?.title,
      message: val?.message,
      createdAt: val?.createdAt,
    });
  };

  const handleUpdateSumbit = async () => {
    setDisabled(true);
    try {
      const response = await axios.patch("/announcement", formData);
      await queryClient.invalidateQueries("announcementData");

      setSeverity("success");
      setAlertMsg("Announcement Updated Successfully");
      setSnackOpen(true);
      setEditMode(false);
    } catch (error) {
      setSeverity("error");
      setAlertMsg("Failed to update Announcement, Please try again.");
      setSnackOpen(true);
      console.log(error);
    }
    setDisabled(false);
  };
  const handleDeleteSumbit = async () => {
    setDisabled(true);
    try {
      const response = await axios.delete("/announcement", {
        data: { id: formData.id },
      });
      await queryClient.invalidateQueries("announcementData");

      setDeleteConfimationOpen(false);
      setInfoModalOpen(false);
      setSeverity("success");
      setAlertMsg("Announcement Deleted Successfully");
      setSnackOpen(true);

      setFormData({
        id: "",
        title: "",
        message: "",
      });
    } catch (error) {
      setSeverity("error");
      setAlertMsg("Failed to delete Announcement, Please try again.");
      setSnackOpen(true);
      console.log(error);
    }
    setDisabled(false);
  };
  return <></>;
};

export default Announcement;
