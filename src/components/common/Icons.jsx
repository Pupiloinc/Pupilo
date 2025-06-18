import React from "react";
const Icons = ({ icon, className, fill , stroke }) => {
  const iconList = {
    downArrow: (
      <svg
        width="35"
        height="20"
        viewBox="0 0 35 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9531 19.3086C17.4453 19.3086 16.9961 19.1133 16.625 18.7422L1.50781 3.27344C1.17578 2.92188 0.980469 2.49219 0.980469 2.00391C0.980469 0.988281 1.74219 0.207031 2.75781 0.207031C3.26562 0.207031 3.71484 0.402344 4.02734 0.714844L17.9531 14.9336L31.8594 0.714844C32.1914 0.402344 32.6406 0.207031 33.1289 0.207031C34.1445 0.207031 34.9062 0.988281 34.9062 2.00391C34.9062 2.49219 34.7109 2.92188 34.3789 3.25391L19.2617 18.7422C18.9297 19.1133 18.4414 19.3086 17.9531 19.3086Z"
          fill={fill}
        />
      </svg>
    ),
    logoutIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_480_7)">
          <path d="M4 15H6V20H18V4H6V9H4V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_480_7">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    close: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="4"
          y1="4"
          x2="21"
          y2="21"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="4"
          x2="4"
          y2="21"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    menu: (
      <svg
        width="25"
        height="15"
        viewBox="0 0 25 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.92578 2.44141C1.39844 2.44141 0.988281 2.03125 0.988281 1.50391C0.988281 0.976562 1.39844 0.554688 1.92578 0.554688H23.7578C24.2852 0.554688 24.6953 0.976562 24.6953 1.50391C24.6953 2.03125 24.2852 2.44141 23.7578 2.44141H1.92578ZM4.39844 8.47656C3.87109 8.47656 3.44922 8.06641 3.44922 7.53906C3.44922 7.01172 3.87109 6.58984 4.39844 6.58984H21.3555C21.8828 6.58984 22.293 7.01172 22.293 7.53906C22.293 8.06641 21.8828 8.47656 21.3555 8.47656H4.39844ZM6.80078 14.5117C6.27344 14.5117 5.86328 14.1016 5.86328 13.5742C5.86328 13.0469 6.27344 12.625 6.80078 12.625H18.9414C19.4688 12.625 19.8906 13.0469 19.8906 13.5742C19.8906 14.1016 19.4688 14.5117 18.9414 14.5117H6.80078Z"
          fill={fill}
        />
      </svg>
    ),
  };
  const addClassName = (icon) => {
    return React.cloneElement(icon, {
      className: (className || "") + " custom-class",
    });
  };
  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
  );
  return iconsNew[icon] || null;
};

export default Icons;
