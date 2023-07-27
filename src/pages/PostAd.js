import React, { useEffect } from "react";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AdForm from "../components/AdPostComponents/AdForm";
import classes from "./PostAd.module.css";
import { getIsLoggedIn } from "../redux/slices/auth-slice";
const PostAd = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/");
  };
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className={classes.topbar}>
        <Link to={"/"} className={classes.backButton}>
          <KeyboardBackspaceOutlined fontSize="medium" />
        </Link>
        <h2 className={classes.logo} onClick={clickHandler}>
          oXch
        </h2>
      </div>
      <h3 className={classes.heading}>POST YOUR AD</h3>
      <AdForm />
    </div>
  );
};

export default PostAd;
