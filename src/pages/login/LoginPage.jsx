import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { Button, Typography } from "@mui/material";
import LoginComponent from "../../components/Registration/LoginComponent";
import RegistrationComponent from "../../components/Registration/RegistrationComponent";
import "./loginPage.css";

const LoginPage = () => {
  const loggedInRedux = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const signInRef = useRef();
  const loginRef = useRef();

  const switchOn = () => {
    loginRef.current.classList.toggle("is-active");
    signInRef.current.classList.toggle("is-active");
  };

  return loggedInRedux ? (
    <div>
      <br />
      <br />
      <br />
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
    <section className="forms-section">
      <h1 className="section-title">Animated Forms</h1>
      <div className="forms">
        <div ref={loginRef} className="form-wrapper is-active">
          <button
            type="button"
            className="switcher switcher-login"
            onClick={switchOn}
          >
            Login
            <span className="underline"></span>
          </button>

          <div className="form form-login">
            <LoginComponent></LoginComponent>
          </div>
        </div>
        <div ref={signInRef} className="form-wrapper">
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={switchOn}
          >
            Sign Up
            <span className="underline"></span>
          </button>

          <div className="form form-signup">
            <RegistrationComponent></RegistrationComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
