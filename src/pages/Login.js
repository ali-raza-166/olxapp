import React from "react";
import { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  CognitoSignIn,
  getIsLoggedIn,
  getSigninStatus,
  getSigninError,
} from "../redux/slices/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import {
  KeyboardBackspaceOutlined,
  LoginOutlined,
  Google,
} from "@mui/icons-material";
import { TextField, Button, CircularProgress } from "@mui/material";
const Login = () => {
  const isLogggedIn = useSelector(getIsLoggedIn);
  const signinStatus = useSelector(getSigninStatus);
  const signinError = useSelector(getSigninError);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(CognitoSignIn({ email, password })).unwrap();
  };
  const clickHandler = (e) => {
    navigate("/");
  };

  useEffect(() => {
    if (isLogggedIn) {
      navigate("/");
    }
  }, [isLogggedIn, navigate]);
  const goBackHandler = (e) => {
    navigate("/");
  };

  return (
    <div>
      <div className={classes.topbar}>
        <div className={classes.backButton}>
          <KeyboardBackspaceOutlined
            onClick={goBackHandler}
            fontSize="medium"
          />
        </div>
        <h2 className={classes.logo} onClick={clickHandler}>
          oXch
        </h2>
      </div>
      <div>
        <h1 className={classes.heading}>Login</h1>
      </div>
      <div className={classes.error}>
        {signinError ? <p classes={classes.error}>{signinError}</p> : <p></p>}
      </div>
      <div className={classes.allInputsWrapper}>
        <div className={classes.formItem}>
          <TextField
            label="Email"
            id="email"
            autoComplete="off"
            size="medium"
            type="email"
            value={email}
            sx={{ width: "100%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <TextField
            label="Password"
            id="password"
            autoComplete="off"
            size="medium"
            type="password"
            value={password}
            sx={{ width: "100%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          {signinStatus === "loading" && !signinError ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<CircularProgress color="inherit" size={20} />}
              sx={{ padding: ".6rem 1rem", width: "100%" }}
            >
              Signin in...
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<LoginOutlined fontSize="small" />}
              sx={{ padding: ".6rem 1rem", width: "100%" }}
              onClick={loginHandler}
            >
              Login
            </Button>
          )}
        </div>

        <div className={classes.forgotPassword}>
          <Link to={"/login"}>
            <span className={classes.signupButton}>Forgot Password</span>
          </Link>
        </div>
        <div className={classes.formItem}>
          <p>OR</p>
        </div>

        {/* <div className={classes.loginWithGoogle}>
          <Google fontSize="large" sx={{ color: "#EA4335" }} />
          <p>Login with Google</p>
        </div> */}
        <div className={classes.formItem}>
          <p>Don't have an account?</p>
          <Link to="/signup">
            <span className={classes.signupButton}>Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
