import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
import {
  AccountCircleOutlined,
  Person2Outlined,
  PersonOutline,
  Verified,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import SnackBar from "../../components/shared/SnackBar";
import { ContainerModal } from "../../components/shared/ContainerModal";
import wave from "../../assets/images/wave.svg";

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
    <Box
      position="relative"
      height="100vh"
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 350,
          boxSizing: "border-box",
          bgcolor: "#E6E6E6",
          filter: "drop-shadow(-13px 12px 5px rgba(0, 0, 0, 0.34))",

          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          bgcolor={"primary.main"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={2}
          boxSizing={"border-box"}
          borderRadius={"50%"}
          mt={-8}
        >
          <PersonOutline color="info" sx={{ fontSize: 60 }} />
        </Box>
        <Stack
          pt={5}
          gap={2}
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
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
            sx={{
              bgcolor: "#FFF",
            }}
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
              sx={{
                bgcolor: "#FFF",
              }}
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
            Login
          </Button>
        </Stack>
      </Box>

      <Box
        position={"absolute"}
        bottom={0}
        left={0}
        width={"100%"}
        zIndex={-1}
        height={"10%"}
        // border={"1px solid"}
        boxSizing={"border-box"}
        bgcolor={"primary.main"}
      >
        <img style={{ marginTop: -1000 }} src={wave} width={"100%"} />
      </Box>

      <SnackBar
        onClose={() => {}}
        open={Boolean(errMsg)}
        msg={errMsg}
        severity="error"
      />
    </Box>
  );
};

export default LoginPage;
