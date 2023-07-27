import classes from "./MainNavigation.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import { LoginOutlined, SellOutlined } from "@mui/icons-material";
import LocationsAutoComplete from "./LocationsAutoComplete";
import CategoriesNavigation from "./CategoriesNavigation";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { API, graphqlOperation } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { authActions, getIsLoggedIn } from "../../redux/slices/auth-slice";
import { useEffect } from "react";
import { getUser } from "../../graphql/queries";
const MainNavigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const withoutNavRoutes = ["/post", "/login", "/signup"];
  const { pathname } = useLocation();

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("isLoggedIn"));
    dispatch(authActions.login(status));
  }, [dispatch]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const dynamoUserData = JSON.parse(localStorage.getItem("dynamoUserData"));
      const response = await API.graphql(
        graphqlOperation(getUser, { id: dynamoUserData.data.createUser.id })
      );
      return response;
    };
    fetchUserDetails().then((response) => console.log(response));
  }, []);
  if (withoutNavRoutes.some((item) => pathname.includes(item))) {
    return null;
  }
  return (
    <div className={classes.wrapper}>
      <Stack direction="column" spacing={1}>
        <Stack
          spacing={2}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
          alignItems="center"
          justifyContent="space-between"
          width="inherit"
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            oXch
          </Typography>
          <LocationsAutoComplete />
          <SearchBar />
          <div className={classes.actions}>
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
          </div>
        </Stack>
        <CategoriesNavigation />
      </Stack>
    </div>
  );
};

export default MainNavigation;
