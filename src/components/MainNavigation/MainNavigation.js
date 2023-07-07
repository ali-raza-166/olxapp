import classes from "./MainNavigation.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import { LoginOutlined, SellOutlined } from "@mui/icons-material";
import LocationsAutoComplete from "./LocationsAutoComplete";
import CategoriesNavigation from "./CategoriesNavigation";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
const MainNavigation = () => {
  const [isAuth, setIsAuth] = useState(true);
  const withoutNavRoutes = ["/post"];
  const { pathname } = useLocation();
  if (withoutNavRoutes.some((item) => pathname.includes(item))) return null;
  return (
    <div className={classes.wrapper}>
      <Stack direction="column" spacing={1}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="inherit"
        >
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            oXch
          </Typography>
          <LocationsAutoComplete />
          <SearchBar />

          {isAuth ? (
            <AccountMenu />
          ) : (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LoginOutlined fontSize="small" />}
            >
              Login
            </Button>
          )}
          <NavLink to="/post">
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<SellOutlined fontSize="small" />}
            >
              Sell
            </Button>
          </NavLink>
        </Stack>
        <CategoriesNavigation />
      </Stack>
    </div>
  );
};

export default MainNavigation;
