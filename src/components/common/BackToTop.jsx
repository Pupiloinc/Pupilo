"use client";
import { useEffect, useState } from "react";
import Icons from "./Icons";

const BackToTop = () => {
  const [isBackTOpVisible, setIsBackTOpVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsBackTOpVisible(true);
      } else {
        setIsBackTOpVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      aria-label="for back to top"
      onClick={handleScrollTop}
      id="back-to-top"
      className={`size-12 cursor-pointer flex justify-center shadow-md shadow-white items-center rounded-full z-50 bg-purple group transition-all ease-linear duration-300 fixed bottom-1 right-1 md:bottom-3 md:right-3 group max-md:scale-75 ${
        !isBackTOpVisible && "translate-y-[150%]"
      }`}
    >
      <span className="relative z-10 inline-block size-4 scale-150 group-hover:-translate-y-0.5 transition-all duration-300 ease-linear">
        <Icons icon="arrowUp" className="stroke-white" />
      </span>
    </button>
  );
};

export default BackToTop;
