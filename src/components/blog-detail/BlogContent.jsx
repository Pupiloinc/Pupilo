"use client";
import React, { useEffect, useState } from "react";
import Title from "../common/Title";
import Image from "next/image";
const BlogContent = () => {
  const [activeSection, setActiveSection] = useState("coding-everyone");
  useEffect(() => {
    const sectionIds = [
      "coding-everyone",
      "tools-platforms",
      "why-code-matters",
    ];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pt-[60px] lg:pt-20 max-w-[1140px] mx-auto px-5 2xl:px-0">
      <div className="flex flex-col-reverse lg:flex-row flex-wrap max-lg:gap-10 justify-between">
        <div className="max-w-[730px] w-full flex flex-col gap-10 md:gap-12 xl:gap-[60px]">
          <div className="fles flex-col">
            <Title
              className="mb-6"
              text={
                "Explore the World of Coding: Tips and Insights for All Ages"
              }
            />
            <p className="text-sm sm:text-base font-medium leading-none text-dark-black mb-3">
              By: Jordon on March 14, 2025
            </p>
            <Image
              width={730}
              height={442}
              src="/assets/images/webp/blog-hero-img.webp"
              alt="blog-hero-img"
              className="w-full max-w-[730px] xl:h-[442px] rounded-[20px] mb-5"
            />
            <p className="text-medium-gray leading-160 text-sm sm:text-base font-normal">
              In today’s digital world, coding is no longer just a career
              skill—it’s a life skill. Whether you’re a curious 10-year-old
              building your first game or a 50-year-old professional exploring a
              new career, the world of coding is open to everyone. At our
              teaching center, we believe that age should never be a barrier to
              learning, especially when it comes to something as powerful and
              creative as coding.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            <h2
              id="coding-everyone"
              className="font-semibold leading-120 lg:mb-3 text-rich-black text-xl sm:text-2xl lg:text-custom-4xl"
            >
              1. Coding Is for Everyone
            </h2>
            <Image
              width={730}
              height={422}
              src="/assets/images/webp/coding-for-everyone.webp"
              alt="coding-for-everyone"
              className="max-w-[730px] xl:h-[422px] w-full rounded-[20px]"
            />
            <p className="text-dark-black font-normal text-sm sm:text-base leading-160">
              One of the biggest misconceptions? “I’m too old” or “I’m too
              young” to start coding. Let’s kill that noise.
            </p>
            <ul className="font-normal text-sm sm:text-base leading-160 -mt-1 list-inside text-dark-grey list-disc flex flex-col gap-[10px]">
              <li>
                For Kids (10–17): Platforms like Scratch, Code.org, and Tynker
                turn programming into play. Visual blocks teach logic,
                sequencing, and storytelling — making it fun while building
                foundational skills.
              </li>
              <li>
                Young Adults & College Students (18–24): This is prime time.
                Dive into Python, JavaScript, or C++ to start building apps,
                games, or websites. Whether you’re pursuing a CS degree or
                self-teaching, now’s the time to stack those skills.
              </li>
              <li>
                Professionals (25–40): Coding isn't just for developers.
                Learning automation, data analysis, or web development can
                supercharge your current role. Tools like Python for data,
                no-code/low-code platforms, and API integration can give you an
                edge.
              </li>
              <li>
                Career Shifters & Hobbyists (40–50+): Believe it — people in
                their 40s and 50s are pivoting into tech roles or starting
                freelance dev gigs. You don’t need to compete with 22-year-olds.
                Instead, leverage your domain experience and layer in technical
                skills.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            <h2
              id="tools-platforms"
              className="font-semibold leading-120 lg:mb-3 text-rich-black text-xl sm:text-2xl lg:text-custom-4xl"
            >
              2. Tools & Platforms to Begin Your Journey
            </h2>
            <Image
              width={730}
              height={422}
              src="/assets/images/webp/tools-and-platforms.webp"
              alt="coding-for-everyone"
              className="max-w-[730px] xl:h-[422px] w-full rounded-[20px]"
            />
            <div className="flex flex-col gap-[10px]">
              <p className="text-dark-black font-normal mb-1 text-sm sm:text-base leading-160">
                The right tools make all the difference. Here’s a breakdown of
                the most user-friendly and effective platforms to get started:
              </p>
              <ul className="list-disc list-inside space-y-1 font-normal text-sm sm:text-base leading-160 text-dark-grey">
                <span className="font-normal text-base leading-160 text-dark-grey !mb-1">
                  1. Absolute Beginners:
                </span>
                <li>
                  Scratch (age 8–14): Visual programming to build animations,
                  games, and stories.
                </li>
                <li>
                  Code.org: Great for K–12 students but scalable for adults too.
                </li>
                <li>
                  Grasshopper (by Google): Mobile-first JavaScript learning app.
                </li>
              </ul>
              <ul className="list-disc list-inside space-y-1 font-normal text-sm sm:text-base leading-160 text-dark-grey">
                <span className="font-normal text-base leading-160 text-dark-grey !mb-1">
                  2. Next-Level Learners:
                </span>
                <li>
                  Free Code Camp: Thousands of hours of structured tutorials.
                </li>
                <li>Khan Academy: Interactive JS and web dev courses.</li>
                <li>Replit : Learn and build real projects in-browser.</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 font-normal text-sm sm:text-base leading-160 text-dark-grey">
                <span className="font-normal text-sm sm:text-base leading-160 text-dark-grey !mb-1">
                  3. For Deep Divers:
                </span>
                <li>
                  Leet Code / HackerRank : Practice coding problems for
                  interviews or upskilling.
                </li>
                <li>
                  CS50 by Harvard (on edX): A full-stack intro to computer
                  science.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            <h2
              id="why-code-matters"
              className="font-semibold leading-120 lg:mb-3 text-rich-black text-xl sm:text-2xl lg:text-custom-4xl"
            >
              3. Why Learning to Code Matters
            </h2>
            <Image
              width={730}
              height={422}
              src="/assets/images/webp/why-learning-code.webp"
              alt="coding-for-everyone"
              className="max-w-[730px] xl:h-[422px] w-full rounded-[20px]"
            />
            <div className="mb-8 sm:mb-10 lg:mb-[60px]">
              <p className="mb-4 text-sm sm:text-base leading-160 font-normal text-dark-black">
                Coding isn’t just about writing lines of syntax. It’s about
                solving real problems. Here’s how it’s transforming everyday
                lives:
              </p>
              <ol className="list-decimal list-inside space-y-[10px] font-normal text-sm sm:text-base leading-160 text-dark-grey ">
                <li>
                  A 13-year-old girl in India used Scratch to build an
                  anti-bullying game and won global recognition.
                </li>
                <li>
                  A mid-level accountant automated tedious Excel work using
                  Python scripts, saving 15+ hours a week.
                </li>
                <li>
                  A retired teacher built an educational app for local schools
                  after learning Swift on Udemy.
                </li>
                <li>
                  A single mom transitioned into a remote web dev career by
                  taking a part-time bootcamp — now earning double.
                </li>
                <li>
                  Use coding to:
                  <ul className="list-disc list-inside font-normal text-sm sm:text-base leading-160 -mt-1 text-dark-grey flex flex-col gap-1">
                    <li>Build a side hustle</li>
                    <li>Enhance your job performance</li>
                    <li>Create tools that serve your community</li>
                    <li>Teach others and inspire change</li>
                  </ul>
                </li>
              </ol>
            </div>
            <p className="text-sm sm:text-base leading-160 font-normal text-dark-black pr-5">
              Coding is not just a career path — it's a mindset shift. It
              teaches you how to think, how to solve, how to create. Whether
              you're 10 or 50, there’s a space in the tech world waiting for you
              to step in. So start now. Be curious. Stay hungry. Build things
              that matter.{" "}
              <span className="font-bold block">
                And remember: The future doesn’t wait — neither should you.
              </span>
            </p>
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="max-w-[332px] w-full h-full lg:sticky top-5">
          <div className="flex flex-col gap-4">
            <p className="text-base sm:text-lg text-dark-black font-semibold leading-normal">
              In this article
            </p>
            <ul className="space-y-4 text-nowrap text-dark-black font-normal text-sm sm:text-base leading-normal">
              <li
                className={`pl-3 border-l-2 ${
                  activeSection === "coding-everyone"
                    ? "border-purple text-purple"
                    : "border-transparent"
                }`}
              >
                <a href="#coding-everyone">Coding Is for Everyone</a>
              </li>
              <li
                className={`pl-3 border-l-2 ${
                  activeSection === "tools-platforms"
                    ? "border-purple text-purple"
                    : "border-transparent text-nowrap"
                }`}
              >
                <a href="#tools-platforms">
                  Tools & Platforms to Begin Your Journey
                </a>
              </li>
              <li
                className={`pl-3 border-l-2 ${
                  activeSection === "why-code-matters"
                    ? "border-purple text-purple"
                    : "border-transparent"
                }`}
              >
                <a href="#why-code-matters">Why Learning to Code Matters</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContent;
