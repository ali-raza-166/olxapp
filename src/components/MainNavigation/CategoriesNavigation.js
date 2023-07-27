import { Paper, Typography } from "@mui/material";
import CategoriesDropdown from "./CategoriesDropdown";
const CategoriesNavigation = () => {
  return (
    <div>
      <Paper
        sx={{
          boxShadow: 0,
          width: "100%",
          height: "50px",
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <CategoriesDropdown />
        <Typography
          sx={{
            fontSize: ".8rem",
            cursor: "pointer",
            display: { xs: "none" },
          }}
        >
          Mobile Phones
        </Typography>
        <Typography
          sx={{
            fontSize: ".8rem",
            cursor: "pointer",
            display: { xs: "none" },
          }}
        >
          Cars
        </Typography>
        <Typography
          sx={{
            fontSize: ".8rem",
            cursor: "pointer",
            display: { xs: "none" },
          }}
        >
          Houses
        </Typography>
        <Typography
          sx={{
            fontSize: ".8rem",
            cursor: "pointer",
            display: { xs: "none" },
          }}
        >
          MotoCycles
        </Typography>
      </Paper>
    </div>
  );
};

export default CategoriesNavigation;
