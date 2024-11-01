import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SnackBar from "../../components/shared/SnackBar";

const LoginPage = () => {
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdVisible, setPwdVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [disabled, setDisabled] = useState(false);

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
    }
    setDisabled(false);
  };

  if (auth?.accessToken) {
    return <Navigate to="/" />;
  }
  //comment here another one
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.main"
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
          <img src={logo} style={{ maxWidth: 90 }} />
          <Typography variant="h5" textAlign="center">
            Tiaong Livestock System Management
          </Typography>
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
            Login
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
  );
};

export default LoginPage;
