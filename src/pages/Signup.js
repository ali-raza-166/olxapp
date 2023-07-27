import React from "react";
import { useState, useEffect } from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";
import { KeyboardBackspaceOutlined, LoginOutlined } from "@mui/icons-material";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CognitoSignUp,
  CognitoConfirmUser,
  CognitoResendVeriCode,
  authActions,
  getConfirmUserStatus,
  getVerificationCodeStatus,
  getSignupError,
  getSignupStatus,
} from "../redux/slices/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle } from "@mui/material/";
const SignUp = () => {
  const dispatch = useDispatch();
  const [userInputs, setUserInputs] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    verificationCode: "",
  });
  const signupStatus = useSelector(getSignupStatus);
  const signupError = useSelector(getSignupError);
  const confirmUserStatus = useSelector(getConfirmUserStatus);
  const veriCodeStatus = useSelector(getVerificationCodeStatus);
  const navigate = useNavigate();
  const backClickHandler = (e) => {
    navigate(-1);
  };
  const changeHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value.trim() });
  };
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      CognitoSignUp({
        name: userInputs.firstName + " " + userInputs.lastName,
        phone_number: userInputs.contactNumber,
        email: userInputs.email,
        password: userInputs.password,
        confirmPassword: userInputs.confirmPassword,
      })
    ).unwrap();
  };
  useEffect(() => {
    if (confirmUserStatus === "succeeded") {
      navigate("/login");
    }
  }, [confirmUserStatus]);
  const clickHandler = (e) => {
    navigate("/");
  };
  const verificationSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(CognitoConfirmUser(userInputs));
  };
  const resendCodeHandler = () => {
    dispatch(CognitoResendVeriCode(userInputs));
  };
  return (
    <div>
      <div className={classes.topbar}>
        <div className={classes.backButton}>
          <KeyboardBackspaceOutlined
            onClick={backClickHandler}
            fontSize="medium"
          />
        </div>
        <h2 className={classes.logo} onClick={clickHandler}>
          oXch
        </h2>
      </div>
      <div>
        <h1 className={classes.heading}>Signup</h1>
        {signupStatus === "failed" && (
          <div className={classes.error}>
            <p>Error Signing up, use another email or proper password</p>
          </div>
        )}
      </div>
      {!(signupStatus === "succeeded") && (
        <form onSubmit={signupSubmitHandler}>
          <div className={classes.allInputsWrapper}>
            <div className={classes.name}>
              <div className={classes.formItem}>
                <TextField
                  label="First Name"
                  id="firstName"
                  autoComplete="off"
                  name="firstName"
                  size="medium"
                  type="text"
                  value={userInputs.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className={classes.formItem}>
                <TextField
                  label="Last Name"
                  id="lastName"
                  autoComplete="off"
                  size="medium"
                  name="lastName"
                  type="text"
                  value={userInputs.lastName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className={classes.formItem}>
              <TextField
                label="Contact"
                id="contactNumber"
                autoComplete="off"
                size="medium"
                name="contactNumber"
                type="text"
                value={userInputs.contactNumber}
                sx={{ width: "100%" }}
                onChange={changeHandler}
              />
            </div>
            <div className={classes.formItem}>
              <TextField
                label="Email"
                id="email"
                autoComplete="off"
                size="medium"
                type="email"
                name="email"
                value={userInputs.email}
                sx={{ width: "100%" }}
                onChange={changeHandler}
              />
            </div>
            <div className={classes.formItem}>
              <TextField
                label="Password"
                id="password"
                autoComplete="off"
                size="medium"
                type="password"
                name="password"
                value={userInputs.password}
                sx={{ width: "100%" }}
                onChange={changeHandler}
              />
            </div>
            <div className={classes.formItem}>
              <TextField
                label="Confirm Password"
                id="confirmPassword"
                autoComplete="off"
                size="medium"
                type="password"
                name="confirmPassword"
                value={userInputs.confirmPassword}
                sx={{ width: "100%" }}
                onChange={changeHandler}
              />
            </div>
            <div className={classes.formItem}>
              {signupStatus === "loading" ? (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<CircularProgress color="inherit" size={20} />}
                  sx={{ padding: ".6rem 1rem", width: "100%" }}
                >
                  Signing up...
                </Button>
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  startIcon={<LoginOutlined fontSize="small" />}
                  sx={{ padding: ".6rem 1rem", width: "100%" }}
                >
                  Signup
                </Button>
              )}
            </div>
            <div className={classes.formFooter}>
              <p>Already have an account?</p>
              <Link to={"/login"}>
                <span className={classes.signupButton}>Login</span>
              </Link>
            </div>
          </div>
        </form>
      )}
      <div>
        {signupStatus === "succeeded" && (
          <form
            onSubmit={verificationSubmitHandler}
            className={classes.allInputsWrapper}
          >
            <div className={classes.formItem}>
              <p>Check your email and enter verification code</p>
            </div>
            <div className={classes.formItem}>
              <TextField
                label="Verification Code"
                id="verification code"
                autoComplete="off"
                size="medium"
                type="text"
                name="verificationCode"
                value={userInputs.verificationCode}
                sx={{ width: "100%" }}
                onChange={changeHandler}
              />
            </div>
            <div className={classes.formItem}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                onClick={verificationSubmitHandler}
                startIcon={<LoginOutlined fontSize="small" />}
                sx={{ padding: ".6rem 1rem", width: "100%" }}
              >
                Verify
              </Button>
            </div>
            <div className={classes.formFooter}>
              <p>Didn't receive verification code?</p>
              <span
                className={classes.signupButton}
                onClick={resendCodeHandler}
              >
                Resend Code
              </span>
            </div>
            {veriCodeStatus === "loading" ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              <p>Code Sent</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
