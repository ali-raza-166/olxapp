import React, { useState } from "react";
import classes from "./FilteredProducts.module.css";
import LocationsAutoComplete from "../components/MainNavigation/LocationsAutoComplete";
import { TextField } from "@mui/material";
import AdCardHorizontal from "../components/UI/AdCardHorizontal";
import bike1 from "../assets/bike1.jpeg";

const FilteredProducts = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  return (
    <div className={classes.wrapper}>
      <h2>Bikes in Pakistan</h2>
      <div className={classes.container}>
        <div className={classes.filters}>
          <p className={classes.heading}>Filters</p>
          <hr className={classes.horizontalLine} />
          <div className={classes.section}>
            <p className={classes.heading}>Locations</p>
            <LocationsAutoComplete />
            <p className={classes.subheading}>Pakistan</p>
            <div className={classes.locationsWrapper}>
              {locations.map((item) => (
                <p className={classes.locationItem}>{item.label}</p>
              ))}
            </div>
          </div>
          <hr className={classes.horizontalLine} />
          <p className={classes.heading}>Price</p>
          <div className={classes.priceRangeInputs}>
            <TextField
              type="number"
              inputProps={{ min: 0, max: 100000 }}
              label="Min Value"
              sx={{ width: "100%" }}
              value={minValue}
              size="small"
              helperText={`Enter numbers only`}
              onChange={(e) => {
                setMinValue(parseInt(e.target.value));
              }}
            />
            <TextField
              type="number"
              inputProps={{ min: 0, max: 100000 }}
              label="Max Value"
              sx={{ width: "100%" }}
              value={maxValue}
              size="small"
              helperText={`Enter numbers only`}
              onChange={(e) => {
                setMaxValue(parseInt(e.target.value));
              }}
            />
          </div>
        </div>
        <div className={classes.content}>
          <p className={classes.heading}>Results</p>
          <AdCardHorizontal
            sx={{ display: "flex", flexDirection: "row" }}
            data={{
              image: bike1,
              price: " RS 132434",
              description: "Lorem ipsum, lorem ipsum, lorem ipsum",
              location: "Lahore, Pakistan",
              timeStamp: "13 hours ago",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default FilteredProducts;
const locations = [
  { label: "Use Current Location" },
  { label: "Lahore" },
  { label: "Faisalabad" },
  { label: "Karachi" },
  { label: "Islamabad" },
  { label: "Peshawar" },
  { label: "Sargodha" },
];
