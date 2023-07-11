import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Footer.module.css";
import { Facebook, YouTube, Instagram, Twitter } from "@mui/icons-material";
const Footer = () => {
  const withoutNavFooterLinks = ["/post", "/login", "/signup"];
  const { pathname } = useLocation();
  if (withoutNavFooterLinks.some((item) => pathname.includes(item)))
    return null;
  return (
    <div className={classes.footer}>
      <div>
        <h5 className={classes.heading}>POPULAR CATEGORIES</h5>
        <p className={classes.subheading}>Cars</p>
        <p className={classes.subheading}>Bikes</p>
        <p className={classes.subheading}>Mobiles</p>
        <p className={classes.subheading}>Houses</p>
      </div>
      <div>
        <h5 className={classes.heading}> TRENDING SEARCHES</h5>
        <p className={classes.subheading}>Cars</p>
        <p className={classes.subheading}>Bikes</p>
        <p className={classes.subheading}>Mobiles</p>
        <p className={classes.subheading}>Houses</p>
      </div>
      <div>
        <h5 className={classes.heading}>ABOUT US</h5>
        <p className={classes.subheading}>About OXch Group</p>
        <p className={classes.subheading}>oXch Blog</p>
        <p className={classes.subheading}>Contact US</p>
        <p className={classes.subheading}>oXch for Business</p>
      </div>
      <div>
        <h5 className={classes.heading}>oXch</h5>
        <p className={classes.subheading}>Help</p>
        <p className={classes.subheading}>Sitemap</p>
        <p className={classes.subheading}>Terms of use</p>
        <p className={classes.subheading}>Privacy Policy</p>
      </div>
      <div className={classes.socialIcons}>
        <h5 className={classes.heading}>FOLLOW US</h5>
        <div className={classes.socialIcon}>
          <Facebook fontSize="small" sx={{ color: "blue" }} />
          <p className={classes.subheading}>oxch</p>
        </div>
        <div className={classes.socialIcon}>
          <Twitter fontSize="small" sx={{ color: "#00acee" }} />
          <p className={classes.subheading}>oxch_t</p>
        </div>
        <div className={classes.socialIcon}>
          <Instagram fontSize="small" sx={{ color: "#E4405F" }} />
          <p className={classes.subheading}>oxch_ins</p>
        </div>
        <div className={classes.socialIcon}>
          <YouTube fontSize="small" sx={{ color: "#FF0000" }} />
          <p className={classes.subheading}>oxch_yt</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
