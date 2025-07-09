import React from 'react'
import Icons from './Icons'

const NewsLetterPopUp = ({ onClose, show }) => {
    return (
        <div
            className={`fixed inset-0 w-full h-full flex justify-center items-center z-50 bg-black/60 transition-opacity duration-300 ease-in-out ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} max-sm:px-4`}
            onClick={onClose}
        >
            <div
                className={`flex items-center justify-center h-screen w-full`}
            >
                <div
                    className={`max-w-[734px] bg-newsletter bg-cover bg-no-repeat w-full p-5 md:p-10 lg:p-[60px] rounded-4xl transition-transform duration-300 ease-in-out ${show ? 'scale-100' : 'scale-0'} overflow-y-auto scroll-none`}
                    style={{ maxHeight: 'calc(100vh - 40px)' }}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-center items-center">
                        <Icons className="max-md:min-w-[150px] max-md:h-[150px]" icon="newsletterIcon" />
                    </div>
                    <h4 className='text-white font-semibold text-custom-3xl lg:text-4xl leading-120 mt-4 lg:mt-10 text-center max-w-[520px] mx-auto'>Thanks for Subscribing to Our Newsletter</h4>
                    <p className='font-normal text-sm md:text-base leading-150 text-white opacity-80 text-center mt-2'>Your inbox just got a whole lot better. <br className='max-lg:hidden' /> Stay tuned for exclusive updates, fresh drops, and first access to what’s next.</p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterPopUp