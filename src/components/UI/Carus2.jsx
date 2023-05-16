import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import "../../css/carus2.css"


export default function Carus2() {
  return (
    <div className="wetr"><div className="reda"><p className="rede_p">The Most Trendy</p><p  className="rede_p1" >FEATURED PRODUCTS</p></div>
      <Swiper
        slidesPerView={1}
        breakpoints={{ 
          380: { 
            slidesPerView: 2, 
          }, 
          800: { 
            slidesPerView: 3, 
          }, 
          1200: { 
            slidesPerView: 4, 
          }, 
        }}
        grid={{
          rows: 2,
        }}
        
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide><div className="mhum1"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum2"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum3"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum4"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum5"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum6"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum7"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum8"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum9"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum10"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum11"></div> </SwiperSlide>
        <SwiperSlide><div className="mhum12"></div> </SwiperSlide>
      </Swiper>
    </div>
  );
}
