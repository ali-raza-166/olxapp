import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { KeyboardBackspaceOutlined, LoginOutlined } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const backClickHandler = (e) => {
    console.log("clicked");
    navigate(-1);
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
        <h2 className={classes.logo}>oXch</h2>
      </div>
      <div>
        <h1 className={classes.heading}>Signup</h1>
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
          <TextField
            label="Confirm Password"
            id="outlined-required"
            autoComplete="off"
            size="medium"
            type="password"
            value={confirmPassword}
            sx={{ width: "100%" }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LoginOutlined fontSize="small" />}
            sx={{ padding: ".6rem 1rem", width: "100%" }}
          >
            Signup
          </Button>
        </div>

        <div className={classes.formItem}>
          <p>OR</p>
        </div>
        <div className={classes.formItem}>
          <p>Already have an account?</p>
          <Link to={"/login"}>
            <span className={classes.signupButton}>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
