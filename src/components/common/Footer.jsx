import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import { FOOTER_DATA_LIST } from "../../../utils/helper";

const Footer = () => {
  return (
    <div className="bg-white-100">
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto pt-[60px] sm:pt-20 pb-[60px]">
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

            <hr className="w-full lg:max-w-[224px] my-[18px] text-black/10" />

            <div className="flex gap-2 flex-col">
              <div className="flex gap-2">
                <Icons icon="phoneIcon" />
                <Link
                  href="tel:+27 (0) 73 864 9689"
                  className="text-black/70 hover:text-custom-pink transition-colors"
                >
                  +27 (0) 73 864 9689
                </Link>
              </div>
              <div className="flex gap-2">
                <Icons icon="mailIcon" />
                <Link
                  href="mailto:hello@pupiloinc.com"
                  className="text-black/70 hover:text-custom-pink transition-colors"
                >
                  hello@pupiloinc.com
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
                    <li key={index} className={`${index !== obj.links.length - 1 ? "mb-3" : ""} group`}>
                      <Link
                        href={object.url}
                        className="text-black/80 sm:text-base text-sm font-normal hover:text-purple transition-all duration-300 ease-in-out"
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
                    <div className="flex gap-2">
                      <a
                        href="https://www.instagram.com/hellopupilo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                      >
                        <Icons icon="instagramIcon" />
                      </a>
                      <a
                        href="https://www.facebook.com/hellopupilo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                      >
                        <Icons icon="facebookIcon" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/pupilo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                      >
                        <Icons icon="tiktokIcon" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/pupiloinc/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                      >
                        <Icons icon="linkedinIcon" />
                      </a>
                      
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t py-4 border-solid border-black/10 text-center text-black/80 max-sm:px-4">
        Copyright © 2025 Pupilo. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
