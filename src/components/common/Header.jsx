"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import { NAV_DATA_LIST } from '../../../utils/helper'
import Icons from './Icons'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef(null);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle scroll effect to prevent flickering
    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollState = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 10);
            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollState);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateScrollState();

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    // Handle body scroll lock when mobile menu is open
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
        <>
            <div className="h-[60px] sm:h-[72px] lg:hidden" />
            <div 
                ref={headerRef}
                className={`py-3 lg:py-6 border-b border-b-black/10 fixed top-0 left-0 right-0 z-40 bg-white lg:relative lg:z-auto transition-transform duration-300 ease-out will-change-transform ${
                    isScrolled ? 'translate-y-0' : 'translate-y-0'
                }`}
                style={{ 
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    perspective: 1000
                }}
            >
                <div className='container max-w-[1140px] xl:px-0 px-4 md:px-6 mx-auto'>
                    <div className="flex justify-between items-center">
                        <Link href="/" className="relative z-10">
                            <Image 
                                className='w-[120px] sm:w-[140px] lg:w-full h-auto object-contain will-change-transform' 
                                src="/assets/images/svg/logo.svg" 
                                width={152} 
                                height={42} 
                                alt='logo' 
                                priority 
                                unoptimized 
                                style={{ transform: 'translateZ(0)' }}
                            />
                        </Link>
                        
                        <ul className="flex gap-8 items-center max-lg:hidden">
                            {NAV_DATA_LIST.map((item, i) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        key={i}
                                        href={item.link}
                                        className={`font-normal text-base leading-150 text-dark-grey relative transition-all duration-300 after:absolute after:left-0 after:bottom-[-8%] after:h-[1.5px] after:bg-dark-grey after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                                            isActive && "font-semibold !text-dark-black"
                                        }`}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </ul>
                        
                        <div className="flex items-center gap-4 max-lg:hidden">
                            <Link 
                                href="/enroll" 
                                className='bg-yellow duration-300 ease-linear transition-all hover:shadow-xl flex items-center font-semibold text-base leading-none text-dark-black gap-2 py-3.5 px-8 rounded-full'
                            >
                                Enroll Now <Icons icon="commonArrow" />
                            </Link>
                            <Link 
                                href="/" 
                                className='bg-black duration-300 ease-linear transition-all hover:shadow-xl flex items-center font-semibold text-base leading-none text-white gap-2 py-3.5 px-8 rounded-full'
                            >
                                Log In <Icons icon="logoutIcon" />
                            </Link>
                        </div>
                        
                        <div className="lg:hidden z-50 cursor-pointer relative">
                            <button
                                onClick={toggleMenu}
                                className="lg:hidden relative z-50 cursor-pointer hover:scale-[1.05] duration-300 flex justify-end items-center rounded-lg w-[46px] h-[45px]"
                            >
                                {isOpen ? (
                                    <Icons
                                        icon="close"
                                        stroke="#4E4E4E"
                                    />
                                ) : (
                                    <Icons
                                        icon="menu"
                                        fill="#4E4E4E"
                                    />
                                )}
                            </button>
                        </div>
                        
                        <div
                            className={`fixed inset-0 bg-white transition-all duration-500 ease-out z-30 flex gap-6 flex-col justify-center items-center ${
                                isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                            }`}
                            style={{ 
                                transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            {NAV_DATA_LIST.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.link}
                                    className={`font-normal text-sm md:text-base leading-150 text-dark-grey relative transition-all duration-300 after:absolute after:left-0 after:bottom-[-8%] after:h-[1.5px] after:bg-dark-grey after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                                        i === 0 && "font-semibold"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-4">
                                <Link 
                                    href="/enroll" 
                                    className='bg-yellow duration-300 ease-linear transition-all hover:shadow-xl flex items-center font-semibold text-sm md:text-base leading-100 text-dark-black gap-1 py-2 px-4 md:py-3.5 md:px-5 rounded-full'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Enroll Now <Icons className="min-w-4 h-4" icon="commonArrow" />
                                </Link>
                                <Link 
                                    href="/" 
                                    className='bg-black duration-300 ease-linear transition-all hover:shadow-xl flex items-center font-semibold text-sm md:text-base leading-100 text-white gap-1 py-2 px-4 md:py-3.5 md:px-5 rounded-full'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Log In <Icons className="min-w-4 h-4" icon="logoutIcon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
