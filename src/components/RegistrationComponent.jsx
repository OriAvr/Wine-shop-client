import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";

const RegistrationComponent = () => {
  function CheckboxFunction() {
    const [checked, setChecked] = useState(false);
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
          />
        }
        label="Business User"
      />
    );
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex =
    /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

  // const phoneRegex = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;

  const [emailError, setEmailError] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log(email, lastName, firstName, password);
  };

  return (
    <form>
      <TextField
        variant="outlined"
        type="text"
        label="First Name"
        onChange={handleFirstNameChange}
      />
      <TextField
        variant="outlined"
        type="text"
        label="Last Name"
        onChange={handleLastNameChange}
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
      <CheckboxFunction />
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default RegistrationComponent;
