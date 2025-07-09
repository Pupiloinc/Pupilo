import React from 'react'
import Icons from './Icons'
import Link from 'next/link';

const CustomButton = ({ iconClass, text, className, iconColor, onClick, href }) => {
  const content = (
    <>
      {text}
      <span className="size-6 max-md:size-4 flex justify-center transition-all duration-300 group-hover:rotate-45 items-center">
        <Icons
          icon={"commonArrow"}
          className={`${iconClass}`}
          fill={iconColor}
        />
      </span>
    </>
  );

  if (href) {
    if (href.startsWith('/')) {
      // Internal link: use Next.js Link
      return (
        <Link className={`flex gap-2 py-3.5 px-8 group items-center cursor-pointer bg-yellow rounded-full text-dark-black font-semibold transition-all duration-300  hover:shadow-xl leading-150 max-md:text-sm max-md:py-2.5 max-md:px-5 ${className}`} href={href}>
          {content}
        </Link>
      );
    }
    // External link
    return (
      <Link
        href={href}
        className={`flex gap-2 py-3.5 px-8 group items-center cursor-pointer bg-yellow rounded-full text-dark-black font-semibold transition-all duration-300  hover:shadow-xl leading-150 max-md:text-sm max-md:py-2.5 max-md:px-5 ${className}`}
        target="_blank" rel="noopener noreferrer"
      >
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`flex gap-2 py-3.5 px-8 group items-center cursor-pointer bg-yellow rounded-full text-dark-black font-semibold transition-all duration-300  hover:shadow-xl leading-150 max-md:text-sm max-md:py-2.5 max-md:px-5 ${className}`}>
      {content}
    </button>
  );
}

export default CustomButton