import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";

export const FOOTER_DATA_LIST = [
  {
    title: "About Us",
    links: [
      { label: "Home", url: "#" },
      { label: "Courses", url: "#" },
      { label: "How It Works", url: "#" },
      { label: "Why Pupilo?", url: "#" },
      { label: "Instructors", url: "#" },
      { label: "Blog", url: "#" },
    ],
  },
  {
    title: "Our Courses",
    links: [
      { label: "Coding Fundamentals", url: "#" },
      { label: "Game Development", url: "#" },
      { label: "Programming with Python", url: "#" },
      { label: "App & Web Development ", url: "#" },
    ],
  },
  {
    title: "Legal Links",
    links: [
      { label: "Terms and Conditions", url: "#" },
      { label: "Privacy Policy", url: "#" },
      { label: "Cookie Policy", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-white-100">
      <div className="container max-w-[1140px] xl:px-0 px-6 mx-auto pt-[60px] sm:pt-20 pb-[60px]">
        <div className="flex lg:flex-row flex-col justify-between gap-7">
          <div className="lg:w-[35%]">
            <Link href="/">
              <Image
                className="max-sm:max-w-[100px] max-w-[190px] w-full"
                src="/assets/images/svg/logo.svg"
                width={152}
                height={42}
                alt="logo"
              />
            </Link>
            <p className="lg:max-w-[295px] max-w-[295px] text-base text-black/70 mt-[18px]">
              Pupilo is Africa's most loved online coding platform for kids and
              teens—where every child can code, create, and thrive.
            </p>

            <hr className="max-w-[224px] my-[18px] text-black/10" />

            <div className="flex gap-2 flex-col">
              <div className="flex gap-2">
                <Icons icon="phoneIcon" />
                <Link
                  href="tel:+2341234567890"
                  className="text-black/70 hover:text-custom-pink transition-colors"
                >
                  +234 123 456 7890
                </Link>
              </div>
              <div className="flex gap-2">
                <Icons icon="mailIcon" />
                <Link
                  href="mailto:hello@pupilo.com"
                  className="text-black/70 hover:text-custom-pink transition-colors"
                >
                  hello@pupilo.com
                </Link>
              </div>
            </div>
          </div>
          <div className="max-sm:w-[100%] max-lg:w-[90%] max-[1120px]:w-[64%] w-[57%] flex flex-wrap xl:gap-[80px] md:gap-[63px] gap-6 sm:gap-10 lg:justify-end justify-between mt-5 lg:mt-0">
            {FOOTER_DATA_LIST.map((obj, i) => (
              <div key={i}>
                <h4 className="font-bold text-lg text-dark-black sm:mb-3 mb-2">
                  {obj.title}
                </h4>
                <ul className="sm:space-y-2 space-y-1">
                  {obj.links.map((object, index) => (
                    <li key={index} className="mb-3">
                      <Link
                        href={object.url}
                        className="text-black/80 sm:text-base text-sm font-normal hover:text-custom-pink after:transition-all ease-linear duration-300 relative after:absolute after:w-0 after:h-[1px] after:bg-custom-pink after:left-0 after:bottom-0 hover:after:w-full"
                      >
                        {object.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {obj.title === "Legal Links" && (
                  <div className="mt-6">
                    <h4 className="font-bold text-lg text-dark-black mb-2">
                      Follow Us
                    </h4>
                    <div className="flex gap-2 cursor-pointer">
                      <Icons icon="instagramIcon" />
                      <Icons icon="facebookIcon" />
                      <Icons icon="linkedinIcon" />
                      <Icons icon="twitterIcon" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t py-6 border-solid border-black/10 text-center text-black/80">
        Copyright © 2025 Pupilo. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
