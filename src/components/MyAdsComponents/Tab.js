import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
const MyAdsTab = ({ handleAdsTabClick, handleFavouritesTabClick }) => {
  const [value, setValue] = useState("ADS");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          sx={{ fontSize: "14px" }}
          onClick={handleAdsTabClick}
          value="ADS"
          label="ADS"
        />
        <Tab
          sx={{ fontSize: "14px" }}
          onClick={handleFavouritesTabClick}
          value="FAVOURITES"
          label="FAVOURITES"
        />
      </Tabs>
    </Box>
  );
};
export default MyAdsTab;
