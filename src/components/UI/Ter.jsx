import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import "../../css/ter.scss"
export default function Ter() {
  return (
    <div>
      <div class="parent2">
        <div class="div21">
          <p className="p_1">We love our clients</p>
          <p className="p">WHAT THEY’RE SAYING</p>
        </div>
        <div class="div22">
          <p className="p_1">From The Blogs</p>
          <p className="p">OUR LATEST POST</p>
        </div>
      </div>
      <div className="wer">
        <div className="wer_p1">
          <Swiper loop modules={[Navigation]} className="mySwiper3">
            <SwiperSlide>
              <div className="red">
                <div className="wer1"></div>
                <div className="qq">
                  These guys have been absolutely outstanding. <br /> Perfect
                  Themes and the best of all that you have many options to
                  choose! Best Support team ever! Very fast responding! Thank
                  you very much! I highly recommend this theme and these people!
                </div>
                <h6>Katherine Sullivan <span>- Customer</span></h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="red">
                <div className="wer2"></div>
                <div className="qq">
                  These guys have been absolutely outstanding. <br /> Perfect
                  Themes and the best of all that you have many options to
                  choose! Best Support team ever! Very fast responding! Thank
                  you very much! I highly recommend this theme and these people!
                </div>
                <h6>Katherine Sullivan <span>- Customer</span></h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="wer_p2">
          <div className="wer_q">
            <Swiper
              direction={"vertical"}
              slidesPerView={3}
              mousewheel={true}
              loop
              modules={[Mousewheel, Pagination]}
              className="mySwiper4"
            >
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Post with Gallery</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Post with Video</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Post with Audio</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Standard Blog Post</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Post with Gallery</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Post with Video</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Post with Audio</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Standard Blog Post</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="runa">
                  <p>07/09/2022</p>
                </div>
                <div className="run_2a">
                  <div className="img_run"></div>
                  <div className="text_run">
                    <h2>Post with Gallery</h2>
                    <p>
                      Posted by <span>admin</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
