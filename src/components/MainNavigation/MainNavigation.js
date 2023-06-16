import classes from "./MainNavigation.module.css";
// import { NavLink } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import { LoginOutlined, SellOutlined } from "@mui/icons-material";
import LocationsAutoComplete from "./LocationsAutoComplete";
import CategoriesNavigation from "./CategoriesNavigation";
import SearchBar from "./SearchBar";
const MainNavigation = () => {
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
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<SellOutlined fontSize="small" />}
          >
            Sell
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LoginOutlined fontSize="small" />}
          >
            Login
          </Button>
        </Stack>
        <CategoriesNavigation />
      </Stack>
    </div>
    // <header className={classes.header}>
    //   <nav>
    //     <ul className={classes.list}>
    //       <li>
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) =>
    //             isActive ? classes.active : undefined
    //           }
    //           end={true}
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           // to="/products"
    //           to="products"
    //           className={({ isActive }) =>
    //             isActive ? classes.active : undefined
    //           }
    //         >
    //           Products
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default MainNavigation;
