import React from "react";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AdForm from "../components/AdPostComponents/AdForm";
import classes from "./PostAd.module.css";
const PostAd = () => {
  return (
    <div>
      <div className={classes.topbar}>
        <Link to={"/"} className={classes.backButton}>
          <KeyboardBackspaceOutlined fontSize="medium" />
        </Link>
        <h2 className={classes.logo}>oXch</h2>
      </div>
      <h3 className={classes.heading}>POST YOUR AD</h3>
      <AdForm />
    </div>
  );
};

export default PostAd;
