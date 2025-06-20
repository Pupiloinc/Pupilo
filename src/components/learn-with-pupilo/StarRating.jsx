import React from "react";
import Image from "next/image";

const StarRating = ({ count,index }) => {
    return (
        <div className={`flex gap-[4px] min-w-[157px] ${index === 3 ? "xl:max-w-[157px] max-w-[100px]" : ""}`}>
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
