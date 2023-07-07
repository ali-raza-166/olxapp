import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
const CategoriesDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontWeight: "bold",
          fontSize: ".8rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        All Categories <KeyboardArrowDownOutlined fontWeight="bold" />
      </Typography>
      <Menu
        PaperProps={{
          style: {
            width: "89%",
            height: "80%",
            marginLeft: "0",
            maxHeight: "unset",
          },
        }}
        elevation={1}
        style={{
          marginTop: "1.5em",
          mariginLeft: "0",
          // boxShadow:"none"
        }}
        sx={{ dropShadow: "0" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Mobile Phones</MenuItem>
        <MenuItem onClick={handleClose}>Cars</MenuItem>
        <MenuItem onClick={handleClose}>Houses</MenuItem>
        <MenuItem onClick={handleClose}>Motorcycles</MenuItem>
      </Menu>
    </div>
  );
};
export default CategoriesDropdown;
