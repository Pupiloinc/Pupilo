import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto'>
            <Image src="/assets/images/svg/logo.svg" width={152} height={42} alt='logo' />
        </div>
    )
}

export default Header