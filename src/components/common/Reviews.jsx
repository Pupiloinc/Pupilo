"use client";
import Title from "./Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { REVIEWS_DATA } from "../../../utils/helper";
import Icons from "./Icons";

const Reviews = () => {
  return (
    <div className="pt-[60px] sm:pt-[100px] lg:pt-40 bg-white">
      <div className="container max-w-[1127px] xl:px-0 px-6 max-sm:px-4 mx-auto">
        <Title
          text={"Hear What Families Say About Pupilo"}
          className={
            "max-w-[1140px] max-lg:!max-w-[500px] max-sm:px-2 mx-auto text-center pb-2 sm:pb-6"
          }
        />
        <div id="about-pupilo" className="relative">

          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              520: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1090: {
                slidesPerView: 3,
                spaceBetween: 20,
                autoplay: false,
              }
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-arrow",
              prevEl: ".prev-arrow"
            }}
            pagination={true}
            modules={[Autoplay, Navigation]}
            className="reviewsSlider !px-2.5 pb-12"
          >
            {REVIEWS_DATA.map((review) => (
              <SwiperSlide
                key={review.id}
                className="!flex justify-center py-4"
              >
                <div className="bg-white border border-dolphin/12 rounded-3xl p-6 shadow-bright-dark reviewSlide transition-all w-full duration-500 h-full min-h-[232px] flex flex-col justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={review.starImg}
                        alt="star"
                        className=""
                        width={17}
                        height={16}
                      />
                    ))}
                  </div>

                  <p className="sm:max-w-[304px] text-base text-black/70">
                    {review.review}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                      <Image
                        src={review.cardImg}
                        alt={review.name}
                        className="w-full h-full object-cover rounded-full"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h4 className="text-black text-xl max-lg:text-lg">{review.name}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-xl:flex max-xl:justify-center max-xl:gap-5">
            <button
              className="absolute prev-arrow max-xl:relative group xl:-left-16 xl:top-1/2 xl:-translate-y-1/2 z-10 bg-white border border-dark-black  rounded-full w-12 h-12 flex items-center justify-center  transition-all ease-linear duration-150 cursor-pointer hover:bg-purple hover:border-purple"
            >
              <Icons className="group-hover:!stroke-white stroke-dark-black duration-300 ease-linear transition-all" icon="prevArrow" />
            </button>
            <button
              className="absolute next-arrow max-xl:relative group xl:-right-16 xl:top-1/2 xl:-translate-y-1/2 z-10 bg-white border border-dark-black rounded-full w-12 h-12 flex items-center justify-center  transition-all ease-linear hover:bg-purple hover:border-purple duration-150 cursor-pointer"
            >
              <Icons className="group-hover:!stroke-white stroke-dark-black duration-300 ease-linear transition-all" icon="nextArrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
