import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const loggedInRedux = useSelector((state) => state.auth.loggedIn);

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
        console.log(res.data);
        dispatch(authActions.login());

        localStorage.setItem("tokenKey", res.data.token);
        localStorage.setItem("userEmail", email);
      })
      .catch((err) => {
        console.log(err.response);
        localStorage.clear();
        dispatch(authActions.logout());
      });
  };

  return loggedInRedux ? (
    <div>
      <Typography variant="h4">You Are Logged In</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(authActions.logout());
          localStorage.clear();
        }}
      >
        Logout
      </Button>
    </div>
  ) : (
    <form>
      <TextField
        variant="outlined"
        type="text"
        label="Email"
        onChange={handleEmailChange}
      />
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
      <Typography>Dont have an account yet?</Typography>
      <Link to="/register">Register</Link>
    </form>
  );
};

export default LoginComponent;
