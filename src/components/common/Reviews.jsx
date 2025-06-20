"use client";
import React, { useEffect, useRef } from "react";
import Title from "./Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { REVIEWS_DATA } from "../../../utils/helper";
import Icons from "./Icons";

const Reviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="pt-[60px] sm:pt-[100px] lg:pt-40 bg-white">
      <div className="container max-w-[1107px] xl:px-0 px-6 max-sm:px-4 mx-auto">
        <Title
          text={"Hear What Families Say About Pupilo"}
          className={
            "max-w-[1140px] max-lg:!max-w-[500px] max-sm:px-2 mx-auto text-center pb-4 sm:pb-6"
          }
        />
        <div id="about-pupilo" className="relative">
          <button
            ref={prevRef}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white border border-dark-black  rounded-full w-12 h-12 flex items-center justify-center  transition-all ease-linear duration-150 cursor-pointer hover:scale-[0.9] max-[1090px]:hidden"
          >
            <Icons className="group-hover:!stroke-white duration-300 ease-linear transition-all" icon="prevArrow" />
          </button>
          <button
            ref={nextRef}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white border border-dark-black rounded-full w-12 h-12 flex items-center justify-center  transition-all ease-linear duration-150 cursor-pointer hover:scale-[0.9] max-[1090px]:hidden"
          >
            <Icons icon="nextArrow" />
          </button>
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
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1090: {
                slidesPerView: 3,
                spaceBetween: 20,
                pagination: false,
                autoplay: false,
              }
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="reviewsSlider pb-12"
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

                  <p className="max-w-[304px] text-base text-black/70">
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
                      <h4 className="text-black text-xl">{review.name}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
