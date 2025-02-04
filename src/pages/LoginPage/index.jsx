import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/images/plsp-logo.png";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./index.scss";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { Verified, Visibility, VisibilityOff } from "@mui/icons-material";
import SnackBar from "../../components/shared/SnackBar";
import { ContainerModal } from "../../components/shared/ContainerModal";

const LoginPage = () => {
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSev, setAlertSev] = useState("success");

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const response = await axios.post("/auth", { email, password });
      console.log(response.data);

      const accessToken = response.data.accessToken || null;

      setAuth({ accessToken });
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);

      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status == 400) {
        setErrMsg("All Field required");
      } else if (error.response?.status == 401) {
        setErrMsg("Incorrect Email or Password");
      } else {
        setErrMsg("Login Failed");
      }
      setAlertSev("error");
      setAlertMsg(error?.response?.data?.message);
      setAlertOpen(true);
    }
    setDisabled(false);
  };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  if (auth?.accessToken) {
    return <Navigate to="/" />;
  }
  //comment here another one
  return (
    <Box boxSizing="border-box" height="100vh">
      <Stack
        padding={3}
        boxSizing="border-box"
        direction="row"
        alignItems="center"
        gap={1}
        bgcolor="#F7F7F7"
      >
        {/* <img src={logo} style={{ maxWidth: 64 }} /> */}
        {/* <Typography variant="h5" textAlign="center" color="primary">
          Gender and Development Management System
        </Typography> */}
      </Stack>
      <Box
        height="calc(100% - 111.72px)"
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
        bgcolor="#F7F7F7"
        flexDirection="column"
      >
        <Paper
          onSubmit={handleSubmit}
          component="form"
          sx={{
            p: 3,
            width: "100%",
            maxWidth: 350,
            boxSizing: "border-box",
          }}
        >
          <Stack
            gap={2}
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Stack width="100%" mb={3}>
              <Typography variant="h5" fontWeight="bold">
                Sign in
              </Typography>
              <Typography variant="body1">Access your account.</Typography>
            </Stack>
            <TextField
              autoFocus
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              error={errMsg ? true : false}
              disabled={disabled ? true : false}
            />

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                autoComplete="off"
                id="password"
                type={pwdVisible ? "text" : "password"}
                name="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={errMsg ? true : false}
                disabled={disabled ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disabled={disabled}
                      edge="end"
                      onClick={() => setPwdVisible(!pwdVisible)}
                      aria-label="eye-btn"
                      aria-labelledby="eye-btn"
                      className="eye-btn"
                    >
                      {pwdVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Stack width="100%" alignItems="start">
              <Button
                size="small"
                sx={{
                  textDecoration: "none",
                  color: disabled ? "lightgray" : "primary",
                  pointerEvents: disabled && "none",
                  p: 0,
                }}
              >
                Forgot password?
              </Button>
            </Stack>

            <Button
              size="large"
              variant="contained"
              type="submit"
              sx={{ width: "100%", mt: 1 }}
            >
              Sign in
            </Button>
          </Stack>
        </Paper>

        <SnackBar
          onClose={() => {}}
          open={Boolean(errMsg)}
          msg={errMsg}
          severity="error"
        />
      </Box>
    </Box>
  );
};

export default LoginPage;
