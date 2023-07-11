import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: "5px",
          },
        },
      },
    },
  },
});

export default theme;
