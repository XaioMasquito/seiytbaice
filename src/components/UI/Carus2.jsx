import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import "../../css/carus2.css"
import "../../css2/carus2.scss"

export default function Carus2() {
  return (
    <div className="wetr"><div className="reda"><p className="rede_p">The Most Trendy</p><p className="rede_p1" >FEATURED PRODUCTS</p></div>
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
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_1"> </div></div> <div className="min2"><a className="a_href" href="/">Flowers daisy pink stick</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p> <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_2"> </div></div> <div className="min2"><a className="a_href" href="/">Blossom bouquet flower</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>   <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_3"> </div></div> <div className="min2"><a className="a_href" href="/">Rose bouquet white</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>       <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_4"> </div></div> <div className="min2"><a className="a_href" href="/">Glory of the Snow</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>        <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_5"> </div></div> <div className="min2"><a className="a_href" href="/">Pearly Everlasting</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>       <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_6"> </div></div> <div className="min2"><a className="a_href" href="/">Flowers white</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>            <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_7"> </div></div> <div className="min2"><a className="a_href" href="/">Jasmine flowers white</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>    <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_8"> </div></div> <div className="min2"><a className="a_href" href="/">Orchid flower red stick</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>  <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_9"> </div></div> <div className="min2"><a className="a_href" href="/">Hyacinth white stick</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>     <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_10"></div></div> <div className="min2"><a className="a_href" href="/">Jack in the Pulpit</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>       <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_11"></div></div> <div className="min2"><a className="a_href" href="/">Flowers daisy pink stick</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p> <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
        <SwiperSlide><div className="mhum"> <div className="min"><div className="min_12"></div></div> <div className="min2"><a className="a_href" href="/">Flower red stick</a><p className="min_text"></p><p className="p_min"><p className="min_text1">$80.00</p>         <p className="min_text2">ADD TO CART</p><p className="min_span"></p></p></div> </div> </SwiperSlide>
      </Swiper>
    </div>
  );
}
