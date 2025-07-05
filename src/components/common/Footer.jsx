"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import { FOOTER_DATA_LIST } from "../../../utils/helper";
import NewsLetterPopUp from "./NewsLetterPopUp";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required");
      setShowPopup(false);
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setShowPopup(false);
      return;
    }
    try {
      const response = await fetch("/api/news-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: email,
          listIds: [3],
          updateEnabled: true,
        }),
      });
      const data = await response.json();
      setLoading(false);
      if (!response.ok) {
        throw new Error(data.message || "Failed to subscribe.");
      }
      setLoading(false);
      setError("");
      setEmail("");
      setShowPopup(true);
    } catch (error) {
      setError("Subscription failed. Please try again.");
      console.error("Brevo API error:", error.message);
      setShowPopup(false);
      setLoading(false);
    }
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="bg-white-100">
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto pt-[60px] sm:pt-20 pb-[60px]">
        <div className="flex lg:flex-row flex-col justify-between gap-7">
          <div className="lg:w-[30%]">
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
            <h4 className="font-bold text-lg text-dark-black mt-6">
              Subscribe to our Newsletter
            </h4>
            <div className="max-w-[338px] w-full rounded-full bg-[#EEEEEE]  mt-3 flex justify-between">
              <div className="py-[13px] pl-5 w-full">
                <input
                  required
                  placeholder="Email Address"
                  className={`bg-transparent text-base leading-160 text-dark-grey placeholder:text-dark-grey font-normal outline-0 border-none w-full ${
                    error ? "border border-red-500" : ""
                  }`}
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
              </div>
              <button
                className="py-3.5 px-8 bg-yellow font-semibold text-base leading-100 text-dark-black rounded-full cursor-pointer"
                onClick={handleSubscribe}
              >
                {!loading ? "Loading..." : "Subscribe"}
              </button>
              {/* Show popup only when showPopup is true */}
              <NewsLetterPopUp onClose={handleClosePopup} show={showPopup} />
            </div>
            {error && (
              <span className="text-red-500 text-xs mt-1 ml-2 block">
                {error}
              </span>
            )}
          </div>
          <div className="max-sm:w-[100%] max-lg:w-[90%] max-[1120px]:w-[64%] w-[60%] flex flex-wrap xl:gap-[80px] md:gap-[63px] gap-6 sm:gap-10 lg:justify-end justify-between mt-5 lg:mt-0">
            {FOOTER_DATA_LIST.map((obj, i) => (
              <div key={i}>
                <h4 className="font-bold text-lg text-dark-black sm:mb-3 mb-2">
                  {obj.title}
                </h4>
                <ul className="sm:space-y-2 space-y-1">
                  {obj.links.map((object, index) => (
                    <li
                      key={index}
                      className={`${
                        index !== obj.links.length - 1 ? "mb-3" : ""
                      } group`}
                    >
                      <Link
                        href={object.url}
                        className="text-black/80 sm:text-base text-sm font-normal hover:text-purple transition-all duration-300 ease-in-out"
                      >
                        {object.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full max-w-[203px]">
              <h4 className="font-bold text-lg text-dark-black sm:mb-3 mb-2">
                Contact Us
              </h4>
              <div className="flex gap-3 flex-col">
                <div className="flex gap-2">
                  <Icons icon="phoneIcon" />
                  <Link
                    href="tel:+27 (0) 73 864 9689"
                    className="text-black/70 hover:text-custom-pink transition-colors"
                  >
                    +27 73 864 9689
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
                <div className="flex gap-2">
                  <Icons icon="whatsappFooterIcon" />
                  <Link
                    href="https://wa.me/+27738649689"
                    target="_blank"
                    className="text-black/70 hover:text-custom-pink transition-colors"
                  >
                    +27 73 864 9689
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-lg text-dark-black mb-2">
                  Follow Us
                </h4>
                <div className="flex gap-1  xl:gap-2">
                  <a
                    href="https://www.facebook.com/hellopupilo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                  >
                    <Icons
                      className="max-sm:min-w-[30px] max-sm:h-[30px]"
                      icon="facebookIcon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/hellopupilo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                  >
                    <Icons
                      className="max-sm:min-w-[30px] max-sm:h-[30px]"
                      icon="instagramIcon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/pupilo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                  >
                    <Icons
                      className="max-sm:min-w-[30px] max-sm:h-[30px]"
                      icon="tiktokIcon"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                  >
                    <Icons
                      className="max-sm:min-w-[30px] max-sm:h-[30px]"
                      icon="youtubeFooterIcon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/pupiloinc/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-80"
                  >
                    <Icons
                      className="max-sm:min-w-[30px] max-sm:h-[30px]"
                      icon="linkedinIcon"
                    />
                  </a>
                </div>
              </div>
            </div>
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
