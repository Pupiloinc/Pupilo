import React from "react";
const Icons = ({ icon, className, fill }) => {
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
    commonArrow: (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0039 3.414L2.39691 12.021L0.98291 10.607L9.58891 2H2.00391V0H13.0039V11H11.0039V3.414Z" fill="#010101" />
      </svg>
    )
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
