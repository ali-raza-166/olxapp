import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authActions } from "../redux/slices/auth-slice";
import { useDispatch } from "react-redux";
import {
  KeyboardBackspaceOutlined,
  LoginOutlined,
  Google,
} from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
    navigate("/");
  };
  const goBackHandler = (e) => {
    navigate(-1);
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
        <h2 className={classes.logo}>oXch</h2>
      </div>
      <div>
        <h1 className={classes.heading}>Login</h1>
      </div>
      <div className={classes.allInputsWrapper}>
        <div className={classes.formItem}>
          <TextField
            label="Email"
            id="outlined-required"
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
            id="outlined-required"
            autoComplete="off"
            size="medium"
            type="password"
            value={password}
            sx={{ width: "100%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LoginOutlined fontSize="small" />}
            sx={{ padding: ".6rem 1rem", width: "100%" }}
            onClick={loginHandler}
          >
            Login
          </Button>
        </div>
        <div className={classes.forgotPassword}>
          <Link to={"/login"}>
            <span className={classes.signupButton}>Forgot Password</span>
          </Link>
        </div>
        <div className={classes.formItem}>
          <p>OR</p>
        </div>
        <div className={classes.loginWithGoogle}>
          <Google fontSize="large" sx={{ color: "#EA4335" }} />
          <p>Login with Google</p>
        </div>
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
