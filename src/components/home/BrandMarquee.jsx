import React from 'react'
import { BRAND_LOGO_DATA_LIST } from '../../../utils/helper'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
    return (
        <div className='bg-white-100 py-10 md:py-14 lg:py-20'>
            <Marquee>
                {BRAND_LOGO_DATA_LIST.map((obj, i) => (
                    <Image key={i} width={175} height={48} src={obj} alt='brand-logo' className='mx-2 lg:mx-[70px] max-h-[38px] lg:max-h-[48px] xl:object-cover' />
                ))}
            </Marquee>
        </div>
    )
}

export default BrandMarquee