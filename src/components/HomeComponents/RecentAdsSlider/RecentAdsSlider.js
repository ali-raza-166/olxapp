// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CARS, BIKES, MOBILES, HOUSES } from "../../../data";
import AdCard from "../../UI/AdCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RecentAdsSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const RecentAdsSlider = () => {
  const data = [...HOUSES, ...CARS, ...BIKES, ...MOBILES];
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
        {data.map((itm) => {
          return (
            <SwiperSlide className="slide-style">
              <AdCard key={itm.id} data={itm} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default RecentAdsSlider;
