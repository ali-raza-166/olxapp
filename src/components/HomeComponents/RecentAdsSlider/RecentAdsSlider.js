// import React, { useRef, useState } from "react";
// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CARS, BIKES, MOBILES, HOUSES } from "../../../data";
import AdCard from "../../UI/AdCardVertical";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RecentAdsSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const RecentAdsSlider = () => {
  const data = [...CARS, ...BIKES, ...MOBILES, ...HOUSES];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        slidesPerGroup={4}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={item.id} className="slide-style">
              <AdCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default RecentAdsSlider;
