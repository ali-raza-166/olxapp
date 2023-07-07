import { useState } from "react";
import classes from "./Settings.module.css";
import { TextField, Button } from "@mui/material";
import { ChangeCircleOutlined } from "@mui/icons-material";
const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPasswrd] = useState(null);
  return (
    <div className={classes.formWrapper}>
      <h3 className={classes.itemHeading}>Change Password</h3>
      <hr className={classes.horizontalLine} />
      <div className={classes.allInputsWrapper}>
        <div className={classes.formItem}>
          <TextField
            label="Current Password"
            id="outlined-required"
            autoComplete="off"
            size="medium"
            type="password"
            value={currentPassword}
            sx={{ width: "100%" }}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <TextField
            label="New Password"
            id="outlined-required"
            autoComplete="off"
            size="medium"
            type="password"
            value={newPassword}
            sx={{ width: "100%" }}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <TextField
            label="Confirm New Password"
            id="outlined-required"
            autoComplete="off"
            size="medium"
            type="password"
            value={confirmNewPassword}
            sx={{ width: "100%" }}
            onChange={(e) => setConfirmNewPasswrd(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ChangeCircleOutlined fontSize="small" />}
            sx={{ padding: ".6rem" }}
          >
            Change
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
