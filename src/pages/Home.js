import AutoPlaySlider from "../components/HomeComponents/AutoPlaySlider/AutoPlaySlider";
import RecentAdsSlider from "../components/HomeComponents/RecentAdsSlider/RecentAdsSlider";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import SliderData from "../components/ImageSlider/SliderData";
import CategorySection from "../components/HomeComponents/CategorySection";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import classes from "./Home.module.css";
import { CARS, BIKES, MOBILES, HOUSES } from "../data";

import {
  DriveEtaOutlined,
  TwoWheelerOutlined,
  PhoneAndroidOutlined,
  HouseOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch()
  // }, []);
  return (
    <div className={classes.home}>
      {/* <ImageSlider slides={SliderData} /> */}
      <AutoPlaySlider />
      <RecentAdsSlider />
      <Divider />
      <div className={classes.section}>
        <CategorySection name="Cars" icon={<DriveEtaOutlined />} data={CARS} />
      </div>
      <div className={classes.section}>
        <CategorySection
          icon={<TwoWheelerOutlined />}
          name="Bikes"
          data={BIKES}
        />
      </div>
      <div className={classes.section}>
        <CategorySection
          icon={<PhoneAndroidOutlined />}
          name="Mobiles"
          data={MOBILES}
        />
      </div>
      <div className={classes.section}>
        <CategorySection icon={<HouseOutlined />} name="Houses" data={HOUSES} />
      </div>
    </div>
  );
};

export default HomePage;
