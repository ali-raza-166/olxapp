import classes from "./MainNavigation.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import { LoginOutlined, SellOutlined } from "@mui/icons-material";
import LocationsAutoComplete from "./LocationsAutoComplete";
import CategoriesNavigation from "./CategoriesNavigation";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { useSelector, useReducer, useDispatch } from "react-redux";
import { authActions } from "../../redux/slices/auth-slice";
const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const withoutNavRoutes = ["/post", "/login", "/signup"];
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

          {isLoggedIn ? (
            <AccountMenu />
          ) : (
            <NavLink to="/login">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<LoginOutlined fontSize="small" />}
              >
                Login
              </Button>
            </NavLink>
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
