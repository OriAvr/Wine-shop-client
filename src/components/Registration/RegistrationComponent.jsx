import React, { useEffect, useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";

import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useNavigate } from "react-router";

const RegistrationComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [biz, setBiz] = useState(false);
  function CheckboxFunction() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={biz}
            onChange={(e) => setBiz(e.target.checked)}
            color="primary"
          />
        }
        label="Business User"
      />
    );
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("1");
  const favorites = [];

  const emailRegex =
    /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

  // const phoneRegex = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;

  const [emailError, setEmailError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    if (emailRegex.test(event.target.value)) {
      setEmailError(false);
      setEmail(event.target.value);
    } else {
      console.log("error email");
      setEmailError(true);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (confirmPassword === password) {
      setConfirmPasswordError(false);
    } else if (confirmPassword !== password) setConfirmPasswordError(true);
  }, [confirmPassword]);

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleAdminPassword = (event) => {
    setAdminPassword(event.target.value);
  };

  const handleRegistration = (event) => {
    if (event) event.preventDefault();
    console.log({ email, name, password, biz });

    axios
      .post("users/register", {
        email,
        name,
        password,
        biz,
        favorites,
        adminPassword,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <form>
      <TextField
        variant="outlined"
        type="text"
        label="Name"
        onChange={handleNameChange}
      />
      <br />
      <TextField
        variant="outlined"
        type="text"
        label="Email"
        onChange={handleEmailChange}
        error={emailError}
      />
      <br />
      <TextField
        variant="outlined"
        type="text"
        label="Password"
        onChange={handlePasswordChange}
      />
      <br />
      <TextField
        variant="outlined"
        type="text"
        label="Confirm Password"
        onChange={handleConfirmPasswordChange}
        error={confirmPasswordError}
      />
      <br />
      <CheckboxFunction />
      <br />
      {biz ? (
        <TextField
          variant="outlined"
          type="text"
          label="Admin Password"
          onChange={handleAdminPassword}
        />
      ) : (
        <div />
      )}
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleRegistration}>
        Register
      </Button>
    </form>
  );
};

export default RegistrationComponent;
