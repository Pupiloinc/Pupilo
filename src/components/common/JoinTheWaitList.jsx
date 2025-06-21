"use client"
import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const JoinTheWaitList = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 12,
        hours: 24,
        minutes: 60,
        seconds: 14
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const { days, hours, minutes, seconds } = prevTime;
                let newSeconds = seconds - 1;
                let newMinutes = minutes;
                let newHours = hours;
                let newDays = days;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }

                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                if (newHours < 0) {
                    newHours = 23;
                    newDays -= 1;
                }

                if (newDays < 0) {
                    clearInterval(timer);
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                }

                return {
                    days: newDays,
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className='min-h-screen bg-purple flex flex-col justify-center px-4 sm:px-6'>
            <h2 className='text-center text-white font-semibold text-custom-6xl leading-120 max-w-[936px] mx-auto'>Join the Waitlist.
                <br />Empower a Future Innovator.</h2>
            <p className='font-normal text-base leading-150 text-white opacity-80 max-w-[771px] text-center mx-auto mt-3'>At HelpBnk, we believe that collective wisdom is the foundation of growth. By connecting individuals, entrepreneurs, and businesses in a collaborative ecosystem, we empower you to share insights, gain valuable expertise, and accelerate success.</p>
            <p className='font-semibold text-custom-4xl leading-120 text-[#F1F1F1] text-center mt-12'>Get Notified Soon</p>
            <form className='flex flex-column justify-center'>
                <div className="w-full max-w-[698px] mt-3 flex gap-2">
                    <div className="max-w-[491px] w-full bg-white rounded-full py-3.5 px-8">
                        <input required type="email" placeholder='Enter your Email' className='font-semibold text-base leading-100 placeholder:text-dark-grey outline-none border-none' />
                    </div>
                    <CustomButton text="Submit" />
                </div>
            </form>
            <div className="flex gap-4 items-center justify-center mt-3">
                <Image src="/assets/images/webp/notified-profile.webp" width={150} height={40} alt='notified-profile' />
                <p className='font-semibold text-white text-base leading-100'>Joined 150+ others on the waitlist</p>
            </div>
            <div className="flex flex-col items-center mt-12">
                <div className="flex gap-6 text-white text-custom-4xl font-semibold">
                    <div className="text-center">
                        <div className='font-semibold text-5xl leading-120 text-white'>{timeLeft.days.toString().padStart(2, '0')}</div>
                        <div className="font-semibold text-2xl leading-120 text-white mt-5">Days</div>
                    </div>
                    <div>:</div>
                    <div className="text-center">
                        <div className='font-semibold text-5xl leading-120 text-white'>{timeLeft.hours.toString().padStart(2, '0')}</div>
                        <div className="font-semibold text-2xl leading-120 text-white mt-5">Hours</div>
                    </div>
                    <div>:</div>
                    <div className="text-center">
                        <div className='font-semibold text-5xl leading-120 text-white'>{timeLeft.minutes.toString().padStart(2, '0')}</div>
                        <div className="font-semibold text-2xl leading-120 text-white mt-5">Minutes</div>
                    </div>
                    <div>:</div>
                    <div className="text-center">
                        <div className='font-semibold text-5xl leading-120 text-white'>{timeLeft.seconds.toString().padStart(2, '0')}</div>
                        <div className="font-semibold text-2xl leading-120 text-white mt-5">Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinTheWaitList