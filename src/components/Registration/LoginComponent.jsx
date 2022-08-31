import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    axios
      .post("/users/login", { email, password })
      .then((res) => {
        setEmail("");
        setPassword("");
        localStorage.setItem("tokenKey", res.data.token);
        localStorage.setItem("userEmail", email);
        dispatch(authActions.login());
      })
      .catch(() => {
        localStorage.clear();
        dispatch(authActions.logout());
        toast.error("Incorrect Email or Password");
      });
  };

  return (
    <form>
      <br />
      <br />
      <br />
      <TextField
        variant="outlined"
        type="text"
        label="Email"
        onChange={handleEmailChange}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        type="password"
        label="Password"
        onChange={handlePasswordChange}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <br />
      <br />
    </form>
  );
};

export default LoginComponent;
