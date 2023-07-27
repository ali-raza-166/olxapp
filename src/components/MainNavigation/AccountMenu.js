import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Settings,
  Logout,
  ListAltOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";
import classes from "./AccountMenu.module.css";
import avatarImg from "../../assets/avatar.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { authActions, CognitoSignOut } from "../../redux/slices/auth-slice";
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(CognitoSignOut()).unwrap();
    navigate("/login");
  };
  return (
    <>
      <Box
        className={classes.avatar}
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="Remy Sharp"
              src={avatarImg}
              sx={{ width: 45, height: 45 }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "300px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 55,
              height: 55,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar src={avatarImg} />
          <div className={classes.greet}>
            <p>Hello,</p>
            <h3>User XYZ</h3>
            <p className={[classes.editProfileButton]}>View or edit profile</p>
          </div>
        </MenuItem>
        <Divider />
        <Link to="/myAds" className={classes.link}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ListAltOutlined fontSize="small" />
            </ListItemIcon>
            My Ads
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/help" className={classes.link}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HelpOutlineOutlined fontSize="small" />
            </ListItemIcon>
            Help
          </MenuItem>
        </Link>
        <Link to="/settings" className={classes.link}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/login" className={classes.link}>
          <MenuItem onClick={logoutHandler}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}
