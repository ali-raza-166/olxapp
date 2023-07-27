// import React, { useRef, useState } from "react";
// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CARS, BIKES, MOBILES, HOUSES } from "../../../data";
import AdCard from "../../UI/AdCardVertical";
import { Typography } from "@mui/material";
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
      <section className={`overflow-x-hidden`}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Recent Ads
        </Typography>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
              slidesPerGroup: 4,
            },
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Navigation]}
          slidesPerGroup={4}
          className="mySwiper"
          loop={true}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={item.id} className="slide-style">
                <AdCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default RecentAdsSlider;
