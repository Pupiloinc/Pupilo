"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { toast } from "react-toastify";
import { TOP_RATED_LIST } from "../../../utils/helper";
import Icons from "./Icons";
import { WAITLIST_LIST_ID } from "../../../constants/brevo";
import { CONTACT_URL } from "../../../utils/urls";

const JoinTheWaitList = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 24,
    minutes: 60,
    seconds: 14,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWaitlistPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimeout(() => {
      setHidden(true);
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`${CONTACT_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, listId: WAITLIST_LIST_ID }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit email");
      }
      localStorage.setItem("hasSeenWaitlistPopup", "true");
      toast.success("Email submitted successfully!");
      setLoading(false);
      setEmail("");
      setNotified(true);
      setTimeout(() => {
        setShowPopup(false);
        setHidden(true);
      }, 500);
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("You’re already subscribed with this email address.");
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center !p-4 z-50 bg-black/60 ${!showPopup && "opacity-0 invisible transition-opacity duration-300 ease-in-out"
        }  ${hidden && "hidden"}`}
      onClick={handleClosePopup}
    >
      <style>{`
                @media (max-width: 640px) {
                    .waitlist-popup-maxheight { max-height: calc(100vh - 24px) !important; }
                }
                @media (min-width: 641px) {
                    .waitlist-popup-maxheight { max-height: calc(100vh - 33px) !important; }
                }
            `}</style>
      <div
        className={`bg-purple flex flex-col justify-center rounded-[24px] py-[82px] max-w-[1140px] w-full z-50 px-4 max-sm:px-2 sm:px-6 max-sm:py-12 relative transition-transform duration-300 ease-in-out overflow-y-scroll waitlist-popup-maxheight ${!showPopup && "  scale-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClosePopup}
          className="absolute top-5 cursor-pointer right-5 z-50"
        >
          <Icons
            icon={"crossIcon"}
            className={" size-7 max-sm:size-5 cursor-pointer"}
          />
        </button>
        <Image
          src="/assets/images/webp/bottom-left-ellipse.webp"
          alt="bottom-left"
          width={325}
          height={325}
          className="absolute bottom-0 left-0 pointer-events-none max-lg:hidden"
        />
        <Image
          src="/assets/images/webp/left-ellipse.webp"
          alt="left-ellipse"
          width={180}
          height={340}
          className="absolute top-1/3 right-0 pointer-events-none max-lg:hidden"
        />
        <Image
          src="/assets/images/webp/top-join-ellipse.webp"
          alt="top-ellipse"
          width={325}
          height={325}
          className="absolute top-0 left-[16%] pointer-events-none max-lg:hidden"
        />

        <h2 className="text-center text-white font-semibold text-5xl max-lg:text-4xl max-md:text-3xl leading-120 max-w-[702px] mx-auto">
          Join the Waitlist.
          <br />
          Empower a Future Innovator.
        </h2>

        <p className="font-normal text-sm md:text-base leading-150 text-white opacity-80 max-w-[771px] text-center mx-auto mt-3">
          We’re building Africa’s most exciting online coding education platform
          for kids and teens...
        </p>
        <p className="font-semibold text-2xl md:text-custom-4xl leading-120 text-[#F1F1F1] text-center mt-8 lg:mt-[50px]">
          {notified ? "Get Notified:- We Have Received Your Email" : "Get Notified Soon"}
        </p>
        <form
          className="flex flex-column justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full max-w-[698px] mt-3 flex gap-2 justify-center">
            <div className="lg:max-w-[491px] max-w-[375px] w-full bg-white rounded-full py-2.5 md:py-3.5 px-4">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="font-semibold w-full text-sm md:text-base placeholder:text-dark-grey outline-none border-none bg-transparent"
              />
            </div>
            <CustomButton text={loading ? "Loading..." : "Submit"} />
          </div>
        </form>

        <div className="flex gap-4 items-center justify-center max-sm:flex-col mt-3">
          <div className="flex">
            {TOP_RATED_LIST.map((item, index) => (
              <Image
                src={item}
                alt={`top-rated-${index}`}
                key={index}
                className={`size-[40px] border-solid border-2 border-purple rounded-full ${index !== 0 && "ml-[-11px]"
                  }`}
                width={40}
                height={40}
              />
            ))}
          </div>
          <p className="font-semibold text-white text-sm lg:text-base leading-100">
            Joined 150+ others on the waitlist
          </p>
        </div>

        <div className="flex flex-col items-center mt-6 lg:mt-12">
          <div className="flex gap-1 md:gap-6 text-white text-custom-4xl font-semibold max-lg:items-baseline">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <React.Fragment key={label}>
                <div className="text-center">
                  <div className="font-semibold text-xl sm:text-2xl md:text-custom-4xl lg:text-5xl leading-120 text-white">
                    {Object.values(timeLeft)[i].toString().padStart(2, "0")}
                  </div>
                  <div className="font-semibold text-lg md:text-xl lg:text-2xl leading-120 text-white mt-3 md:mt-5">
                    {label}
                  </div>
                </div>
                {i < 3 && <div>:</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheWaitList;
