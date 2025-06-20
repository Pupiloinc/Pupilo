import React from "react";
import Image from "next/image";

const StarRating = ({ count, className }) => {
    return (
        <div className={`flex gap-[4px] min-w-[157px] ${className}`}>
            {[...Array(count)].map((_, i) => (
                <Image
                    key={i}
                    src="/assets/images/svg/star-icon.svg" 
                    alt="star"
                    width={17}
                    height={16}
                />
            ))}
        </div>
    );
};

export default StarRating;
