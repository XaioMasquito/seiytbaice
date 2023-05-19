import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../css/carus3.scss"


// import required modules
import { Pagination } from "swiper";

export default function Carus3() {
  return (
    <div className="carus3">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          580: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={15}
        modules={[Pagination]}
        navigation={true}
        
        loop
        className="mySwiper5"
      >
        <SwiperSlide><div className="carus_j1"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j2"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j3"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j4"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j5"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j1"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j2"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j3"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j4"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
        <SwiperSlide><div className="carus_j5"><div className="carus_k"><div className="carus_k1"></div></div></div></SwiperSlide>
      </Swiper>
    </div>
  );
}
