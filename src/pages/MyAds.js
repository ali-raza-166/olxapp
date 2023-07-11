import React from "react";
import Tab from "../components//MyAdsComponents/Tab";
import AdCardVertical from "../components/UI/AdCardVertical";
import { CARS, BIKES, MOBILES, HOUSES } from "../data";
import classes from "./MyAds.module.css";
import { useState } from "react";
const MyAds = () => {
  const [tab1, setTab1] = useState(true);
  const handleAdsTabClick = () => {
    setTab1(true);
  };
  const handleFavouritesTabClick = () => {
    setTab1(false);
  };

  const myAdsList = CARS.map((item) => (
    <AdCardVertical key={item.id} data={item} />
  ));
  const favouritesList = HOUSES.map((item) => (
    <AdCardVertical key={item.id} data={item} isFavourite={true} />
  ));
  return (
    <div className={classes.myAdsWrapper}>
      <Tab
        handleAdsTabClick={handleAdsTabClick}
        handleFavouritesTabClick={handleFavouritesTabClick}
      />
      <div className={classes.myAdsListWrapper}>
        {tab1 ? myAdsList : favouritesList}
      </div>
    </div>
  );
};

export default MyAds;
