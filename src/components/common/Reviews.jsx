"use client";
import React, { useState } from "react";
import Title from "./Title";
import Image from "next/image";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="pt-[60px] sm:pt-[100px] lg:pt-40 bg-white">
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto">
        <Title
          text={"Hear What Families Say About Pupilo"}
          className={"max-w-[1140px] mx-auto text-center pb-10"}
        />

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviewsData.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-3">
                  <div className="bg-white border border-dolphin/12 hover:border-purple rounded-3xl p-6 custom-cards-shadow transition-all duration-500 max-w-sm mx-auto">
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
                          alt={review.reviewImage}
                          className="w-full h-full object-cover rounded-full"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h4 className=" text-black text-xl">{review.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L1 5L5 9"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? "bg-purple" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
