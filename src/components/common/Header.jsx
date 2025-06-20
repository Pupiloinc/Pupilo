"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NAV_DATA_LIST } from '../../../utils/helper'
import Icons from './Icons'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    return (
        <div className="py-3 lg:py-6 border-b border-b-black/10">
            <div className='container max-w-[1140px] xl:px-0 px-4 md:px-6 mx-auto'>
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image className='max-sm:max-w-[100px] w-full' src="/assets/images/svg/logo.svg" width={152} height={42} alt='logo' />
                    </Link>
                    <ul className="flex gap-8 items-center max-lg:hidden">
                        {NAV_DATA_LIST.map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className={`font-normal text-base leading-150 text-dark-grey relative  transition-all duration-700
     after:absolute after:left-0 after:bottom-[-8%] after:h-[1.5px] after:bg-dark-grey
    after:w-0 after:transition-all after:duration-500 hover:after:w-full ${i === 0 && "font-semibold !text-dark-black"} `}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </ul>
                    <Link href="/" className='bg-black duration-300 ease-linear transition-all hover:shadow-xl max-lg:hidden flex items-center font-semibold text-base leading-100 text-white gap-2 py-3.5 px-8 rounded-full'>Log In <Icons icon="logoutIcon" /></Link>
                    <div className="lg:hidden z-50 cursor-pointer">
                        <button
                            onClick={toggleMenu}
                            className={`lg:hidden relative z-50 cursor-pointer hover:scale-[1.05] duration-300 flex justify-end items-center rounded-lg w-[46px] h-[45px] `}
                        >
                            {isOpen ? (
                                <Icons
                                    icon="close"
                                    stroke={pathname === "/" ? "#4E4E4E" : "#4E4E4E"}
                                />
                            ) : (
                                <Icons
                                    icon="menu"
                                    fill={pathname === "/" ? "#4E4E4E" : "#4E4E4E"}
                                />
                            )}
                        </button>
                    </div>
                    <div
                        className={`w-full h-screen bg-white transition-all duration-500 left-0 lg:-top-full z-40 fixed flex gap-6 flex-col justify-center items-center ${isOpen ? "top-0 left-0" : "-top-full"
                            }`}
                    >
                        {NAV_DATA_LIST.map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className={`font-normal text-sm md:text-base leading-150 text-dark-grey relative  transition-all duration-700
     after:absolute after:left-0 after:bottom-[-8%] after:h-[1.5px] after:bg-dark-grey
    after:w-0 after:transition-all after:duration-500 hover:after:w-full ${i === 0 && "font-semibold"} `}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link href="/" className='bg-black duration-300 md:text-base ease-linear transition-all hover:shadow-xl flex items-center font-semibold text-sm leading-100 text-white gap-1 py-2 px-4 md:py-3.5 md:px-5 rounded-full'>Log In <Icons className="min-w-4 h-4" icon="logoutIcon" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header