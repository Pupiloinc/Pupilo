import React from "react";
import Title from "./Title";
import Image from "next/image";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Kayla Steyn",
      rating: 5,
      review:
        "My son shifted from watching cartoons to building interactive stories! Pupilo's gamified design sparks his creativity.",
      cardImg: "/assets/images/svg/kayla-steyn.svg",
    },
    {
      id: 2,
      name: "Nairah Moeketsi",
      rating: 5,
      review:
        "I never thought my son would enjoy math, but through Pupilo's game design classes, he's now loving coding and math at the same time.",
      cardImg: "/assets/images/svg/kayla-steyn.svg",
    },
    {
      id: 3,
      name: "Johan Botha",
      rating: 5,
      review:
        "The coding sessions are fantastic! My daughter used to shy away from technology - now she's proudly building animations in Scratch.",
      cardImg: "/assets/images/svg/kayla-steyn.svg",
    },
  ];

 
  return (
    <div className="pt-[60px] sm:pt-[100px] lg:pt-40 bg-white">
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto">
        <Title
          text={"Hear What Families Say About Pupilo"}
          className={"max-w-[1140px] mx-auto text-center pb-10"}
        />

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-dolphin/12 hover:border-purple rounded-3xl p-6 custom-cards-shadow transition-all duration-500 flex-1 max-w-sm mx-auto md:mx-0"
            >
              <div className="flex">{review.rating}</div>

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
                  <h4 className=" text-black text-xl">
                    {review.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
