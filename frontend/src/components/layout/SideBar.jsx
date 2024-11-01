import {
  Announcement,
  Archive,
  ArchiveOutlined,
  AssessmentOutlined,
  BarChart,
  Check,
  Dashboard,
  ListAltRounded,
  Person,
  Pin,
  Place,
} from "@mui/icons-material";
import { Box, Button, Drawer, Paper, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

export default function SideBar(props) {
  return (
    <Paper
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
          p: 2,
          mb: 1,
        }}
      >
        <img src={logo} alt="logo" width={75} />
      </Box>

      <NavLink to="/" className="nav-link">
        <Stack direction={"row"} alignItems="center" gap={2}>
          <BarChart sx={{ fontSize: 28 }} />
          <Typography minWidth={300}>Dasboard</Typography>
        </Stack>
      </NavLink>
      <NavLink to="/heatmap" className="nav-link">
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
      </NavLink>
      <NavLink to="/archived" className="nav-link">
        <Stack direction={"row"} alignItems="center" gap={2}>
          <Archive sx={{ fontSize: 28 }} />
          <Typography minWidth={300}>Archived</Typography>
        </Stack>
      </NavLink>
      <Stack boxSizing="border-box" padding={2} mt={"auto"}>
        <Button variant="contained">Log out</Button>
      </Stack>
    </Paper>
  );
}
