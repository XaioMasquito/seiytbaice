// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import "../../css/carus.css"
export default function Carus() {
  return (
    <div className="block1">
      <Swiper
        spaceBetween={1}
        loop
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <div className="red1">
            <div className="w">
              <h1 className="red_1">Quality</h1>
              <p className="p_red">The Gift of Flowers</p>
              <a href="/">
                <button className="q">
                  <span>Shop collection</span>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="red2">
            <div className="w">
              <h1 className="red_1">Welcome</h1>
              <p className="p_red1">2022 Flower Trend</p>
              <a href="/">
                <button className="q">
                  <span>Shop collection</span>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
