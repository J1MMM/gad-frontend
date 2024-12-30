import React, { useEffect, useState } from "react";
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
  const [loginShow, setLoginShow] = useState(true);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [email2, setEmail2] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [pwdVisible1, setPwdVisible1] = useState(false);
  const [pwdVisible2, setPwdVisible2] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [email3, setEmail3] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [otp, setOtp] = useState("");
  const [id, setId] = useState("");

  const [sendOTPOpen, setSendOTPOpen] = useState(false);
  const [resetPassOpen, setResetPassOpen] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSev, setAlertSev] = useState("success");

  const [passNotMatch, setPassNotMatch] = useState(false);
  const [emailDup, setEmailDup] = useState(false);

  const [verificationOpen, setVerificationOpen] = useState(false);

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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const response = await axios.post("/users", {
        lastname,
        firstname,
        middlename,
        email: email2,
        password: password1,
        password2: password2,
      });
      setId(response.data?.result?._id);
      setEmail2("");
      setPassword1("");
      setPassword2("");
      setFirstname("");
      setLastname("");
      setMiddlename("");

      setAlertSev("success");
      setAlertMsg(response?.data?.success);
      setAlertOpen(true);
      setErrMsg("");
      setVerificationOpen(true);
    } catch (error) {
      console.log(error);
      setAlertSev("error");
      setAlertMsg(error?.response?.data?.message);
      setAlertOpen(true);
      if (error?.response?.data?.message == "Password do not match") {
        setPassNotMatch(true);
      } else if (
        error?.response?.data?.message == "This Email Address is Already in use"
      ) {
        setEmailDup(true);
      } else {
        setErrMsg(error?.response?.data?.message);
      }
    }
    setDisabled(false);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setDisabled(true);
    try {
      const response = await axios.post("/reset-password", {
        email: email3,
      });
      setResetPassOpen(true);
      setSendOTPOpen(false);
      setAlertSev("success");
      setAlertMsg("OTP sent. Check your email.");
      setAlertOpen(true);
      setEmail(email3);
      setEmail3("");
    } catch (error) {
      console.log(error);
      setAlertSev("error");
      setAlertMsg(error?.response?.data?.message);
      setAlertOpen(true);
    }

    setDisabled(false);
  };

  const handleSubmitVerification = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setDisabled(true);
    try {
      const response = await axios.post("/users/verify", {
        otp,
        id,
      });

      setVerificationOpen(false);
      setAlertSev("success");
      setAlertMsg("OTP VERIFIED SUCCESSFULLY");
      setAlertOpen(true);

      setOtp("");
      setId("");
    } catch (error) {
      console.log(error);
      setAlertSev("error");
      setAlertMsg(error?.response?.data?.message);
      setAlertOpen(true);
    }

    setDisabled(false);
  };

  const handleResetPassSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setDisabled(true);
    try {
      const response = await axios.put("/reset-password", {
        email,
        otp,
        password: newPassword1,
        password2: newPassword2,
      });
      console.log(response.data);

      setResetPassOpen(false);
      setAlertSev("success");
      setAlertMsg("Your password has been changed successfully.");
      setAlertOpen(true);
    } catch (error) {
      console.log(error);
      setAlertSev("error");
      setAlertMsg(error?.response?.data?.message);
      setAlertOpen(true);
    }
    setDisabled(false);
  };

  useEffect(() => {
    setErrMsg("");
  }, [
    email,
    password,
    firstname,
    lastname,
    middlename,
    email2,
    password1,
    password2,
  ]);

  useEffect(() => {
    setPassNotMatch(false);
  }, [password1, password2]);

  useEffect(() => {
    setEmailDup(false);
  }, [email2]);

  if (auth?.accessToken) {
    return <Navigate to="/" />;
  }
  //comment here another one
  return <Box></Box>;
};

export default LoginPage;
