"use client";

import React, { useEffect } from "react";
import Title from "./Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Kayla Steyn",
      starImg: "/assets/images/svg/star-icon.svg",
      rating: 5,
      review:
        "My son shifted from watching cartoons to building interactive stories! Pupilo's gamified design sparks his creativity.",
      cardImg: "/assets/images/webp/kayla-steyn.webp",
    },
    {
      id: 2,
      name: "Nairah Moeketsi",
      starImg: "/assets/images/svg/star-icon.svg",
      rating: 5,
      review:
        "I never thought my son would enjoy math, but through Pupilo's game design classes, he's now loving coding and math at the same time.",
      cardImg: "/assets/images/webp/naledi-moeketsi.webp",
    },
    {
      id: 3,
      name: "Johan Botha",
      starImg: "/assets/images/svg/star-icon.svg",
      rating: 5,
      review:
        "The coding sessions are fantastic! My daughter used to shy away from technology - now she's proudly building animations in Scratch.",
      cardImg: "/assets/images/webp/johan-botha.webp",
    },
    {
      id: 4,
      name: "Kayla Steyn",
      starImg: "/assets/images/svg/star-icon.svg",
      rating: 5,
      review:
        "My son shifted from watching cartoons to building interactive stories! Pupilo's gamified design sparks his creativity.",
      cardImg: "/assets/images/webp/kayla-steyn.webp",
    },
  ];

  return (
    <div className="pt-[60px] sm:pt-[100px] lg:pt-40 bg-white">
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto">
        <Title
          text={"Hear What Families Say About Pupilo"}
          className={"max-w-[1140px] mx-auto text-center pb-10"}
        />

        <div className="relative">
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
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 1200000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet review-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active review-bullet-active",
            }}
            modules={[Autoplay, Pagination]}
            className="reviewsSlider pb-12"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id} className="!flex justify-center">
                <div className="bg-white border border-dolphin/12 hover:border-purple rounded-3xl p-6 shadow-light-dark hover:shadow-card-hover transition-all duration-500 min-h-auto">
                  <div className="flex gap-1 mb-4">
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

                  <p className="max-w-[304px] text-base text-black/70 my-4">
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
