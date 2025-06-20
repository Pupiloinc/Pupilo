import React from "react";
import Image from "next/image";

const StarRating = ({ count }) => {
    return (
        <div className="flex gap-[4px] min-w-[157px]">
            {[...Array(count)].map((_, i) => (
                <Image
                    key={i}
                    src="/assets/images/svg/star-icon.svg" // Ensure this is in /public
                    alt="star"
                    width={16}
                    height={16}
                />
            ))}
        </div>
    );
};

export default StarRating;
