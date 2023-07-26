import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import man from '../img/sld.png'
import pt from '../img/pt.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={man}   alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={man}   alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={man}   alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={man}   alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={man}   alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={man}   alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={man}   alt="" />        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
