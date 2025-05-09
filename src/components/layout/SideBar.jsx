import {
  Announcement,
  Archive,
  ArchiveOutlined,
  AssessmentOutlined,
  BarChart,
  Check,
  Dashboard,
  Folder,
  FolderOutlined,
  Group,
  List,
  ListAltRounded,
  Person,
  Pin,
  Place,
} from "@mui/icons-material";
import { Box, Button, Drawer, Paper, Stack, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmationDialog from "../shared/ConfirmationDialog";
import UseLogout from "../../hooks/useLogout";

export default function SideBar() {
  const logout = UseLogout();
  const navigate = useNavigate();
  const [logoutConfimation, setLogoutConfimation] = useState(false);

  const signout = async () => {
    await logout();
    setLogoutConfimation(false);
    navigate("/login", { replace: true });
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: 200,
          minWidth: 200,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          borderRadius: 0,
          overflow: "hidden",
          pt: 2,
        }}
      >
        <NavLink to="/dashboard" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <BarChart sx={{ fontSize: 28 }} />
            <Typography fontFamily={""} minWidth={300}>
              Dasboard
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/students" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <List sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>Students</Typography>
          </Stack>
        </NavLink>
        <NavLink to="/employees" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <Group sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>Employees</Typography>
          </Stack>
        </NavLink>
        {/* <NavLink to="/heatmap" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <Place sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>Heatmap</Typography>
          </Stack>
        </NavLink>
        <NavLink to="/approval" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <Check sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>Approval</Typography>
          </Stack>
        </NavLink>
        <NavLink to="/farmers" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <Person sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>Farmers</Typography>
          </Stack>
        </NavLink>
        <NavLink to="/announcement" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <Announcement sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>Announcement</Typography>
          </Stack>
        </NavLink> */}
        {/* <NavLink to="/archived" className="nav-link">
        <Stack direction={"row"} alignItems="center" gap={2}>
          <Archive sx={{ fontSize: 28 }} />
          <Typography minWidth={300}>Archived</Typography>
        </Stack>
      </NavLink> */}
        <Stack boxSizing="border-box" padding={2} mt={"auto"}>
          <Button
            variant="contained"
            onClick={() => setLogoutConfimation(true)}
          >
            Log out
          </Button>
        </Stack>
      </Paper>

      <ConfirmationDialog
        title="Confirm logout"
        content="Are you sure you want to log out? Logging out will end your current session and require you to sign in again to access your account."
        open={logoutConfimation}
        onClose={() => setLogoutConfimation(false)}
        confirm={signout}
      />
    </>
  );
}
